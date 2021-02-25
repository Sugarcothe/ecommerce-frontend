import React, {useState} from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import {createCategory} from './apiAdmin'

const AddCategory = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)


  // DESTRUCTURE USER AND INFO FROM LOCAL STORAGE
  const {user, token} = isAuthenticated()

  const handleChange = (e) => {
    setError('')
    setName(e.target.value)
  }
  const clickSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    // make request to API to create category
    createCategory(user._id, token, {name})
    .then(data => {
      if(data.error) {
        setError(true)
      } else {
        setError('');
        setSuccess(true);
      }
    })
  }

  const newCategoryForm = () => (

    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input 
          type="text" 
          className="form-control" 
          onChange={handleChange}
          value={name}
          autoFocus
          required
          />
      </div>
      
      <button className="btn btn-outline-primary">
            Create Category
          </button>
    </form>
  )

    const showSuccess = () => {
      if(success) {
        return <h3 className="text-success">{name} is created succesfully</h3>
      }
    }

    const showError = () => {
      if(error) {
        return <h3 className="text-danger">Category should be unique</h3>
      }
    }

    const goBack = () => (
     <div className="mt-5">
       <Link to="/admin/dashboard" className=" btn btn-sm text-light bg-warning">Dashboard</Link>
     </div>
    )

  
  return (
    <div>
      <Layout 
        title="Add a new Category" 
        description={`Goodday! ${user.name}, ready to add a new category ?`}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {showSuccess()}
              {showError()}
              {newCategoryForm()}
              {goBack()}
            </div>
          </div>

      </Layout>
    </div>
  )


  };

export default AddCategory;