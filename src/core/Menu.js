import React from 'react';
import {Link, withRouter} from 'react-router-dom'

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
          style={isActive(history, "/signin")} 
          to="/signin">Sign In </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" 
          style={isActive(history, "/Signup")} 
          to="/Signup">Sign up</Link>
        </li>

      </ul>
    </div>
  
)

export default withRouter(Menu)
