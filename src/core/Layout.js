import React from 'react';
import Menu from './Menu';
import jumbobg from '../user/img/AFRICA/Jollof.jpg';
import '../styles.css'

const Layout = ({

  title = "Title", 
  description ="Descritption", 
  children, 
  className,
}) => (

  <div>
    <Menu/>
    <div className="jumbotron container-fluid"
    style={{ backgroundImage: `url(${jumbobg})`, width: "100%" }}
    >
      <h2>{title}</h2>
      <p className='lead'>{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>

)

export default Layout;