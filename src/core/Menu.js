import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isAuthenticated, signout} from "../auth";

const isActive = (history, path) => {
  if(history.location.pathname === path) {
    return {color: "#fff"}
  } else {
    return {color: "#333"}
  }
}

const Menu = ({history}) => (
  
    <div>
      <ul className="nav nav-tabs bg-warning">

        <li className="nav-item">
          <Link 
          className="nav-link" 
          style={isActive(history, "/")} 
          to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link 
          className="nav-link" 
          style={isActive(history, "/shop")} 
          to="/shop">Shop</Link>
        </li>

        {/* USER AUTHENTICATION LOGIN */}
        {isAuthenticated() && isAuthenticated().user.role === 0 &&(<li className="nav-item">
            <Link 
            className="nav-link" 
            style={isActive(history, "/user/dashboard")} 
            to="/user/dashboard">Dashboard</Link>
          </li>
        )}

        {/* ADMIN AUTHENTICATION LOGIN */}
        {isAuthenticated() && isAuthenticated().user.role === 1 &&(<li className="nav-item">
            <Link 
            className="nav-link" 
            style={isActive(history, "/admin/dashboard")} 
            to="/admin/dashboard">Dashboard</Link>
          </li>
        )}

        {/* SIGN IN & SIGNOUT WITH AUTHENTICATION */}

        {!isAuthenticated() && (
        <>
        {/* SIGN IN */}
          <li className="nav-item">
          <Link 
          className="nav-link" 
          style={isActive(history, "/user/signin")} 
          to="/user/signin">SignIn </Link>
        </li>

          {/*SIGNOUT  */}
        <li className="nav-item">
          <Link className="nav-link" 
          style={isActive(history, "/Signup")} 
          to="/Signup">SignUp</Link>
        </li>
        </>
      )}

      {isAuthenticated() && (
        <li className="nav-item">
          <span className="nav-link" 
            style={{cursor: 'pointer', color: '#fff'}} 
            onClick={() => signout(() => {
              history.push("/")
            })}>SignOut
          </span>
        </li>
      )}

      </ul>
    </div>
  
)

export default withRouter(Menu)
