import React , {useState}from 'react';
import Layout from '../core/Layout';
import {Link, Redirect} from 'react-router-dom';
import {signin, authenticate, isAuthenticated} from '../auth/index';
import jumboin from './img/burger.jpg'

 
const Signin = () => {
  const [values, setValues] = useState({
    
    email: 'bruno@gmail.com',
    password: 'bruno123',
    error: '', 
    loading: false,
    redirectToReferrer: false,

  });

const { email, password, loading, error, redirectToReferrer } = values;
const {user} = isAuthenticated()

 const handleChange = name => event => {
  setValues({...values, error: false, [name]: event.target.value})
 }


 const clickSubmit = (e) => {
  e.preventDefault()
  setValues({...values, error: false, loading: true})
  signin({email, password})
  .then(data => {
    if(data.error) {
      setValues({...values, error: data.error, success: false})
    } else {
     authenticate( data, () => {
        setValues({
          ...values,
          redirectToReferrer: true
        })
       })
    }
  })
 }



  const signInForm = () => (
  
    <form>
    
    <div className="form-group">
      <label className="text-muted">Email</label>
      <input onChange={handleChange('email')} type="email" className="form-control"
      value={email}
      />
    </div>
 
    <div className="form-group">
      <label className="text-muted">Password</label>
      <input onChange={handleChange('password')} type="password" className="form-control"
      value={password}
      />
    </div>
    <button onClick={clickSubmit} 
    className="btn bg-warning btn-light">Submit</button>
  </form>
 
); 

  const showError = () => (
  <div className="alert alert-danger" 
  style={{display: error ? '' : 'none'}}>
     {error}
  </div>
  )
 
 const showLoading = () => (
  loading && (
    <div className="alert alert-info">
      <h4>Loading...</h4>
    </div>
  )
 )

 const redirectUser = () => {
   if(redirectToReferrer) {
    if(user && user.role === 1) {
      return <Redirect to="/admin/dashboard"/>
    } else {
      return <Redirect to="/user/dashboard"/>
    }
   }
 }



return (
  <Layout 
    title ="SIGN IN" 
    description="Sign in to Node React E-commerce App"
    className="container jumbo col-md-8 offset-md-2"
    style={{ backgroundImage: `url(${jumboin})`}}
    >
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
</Layout>
)
}

  
export default Signin

