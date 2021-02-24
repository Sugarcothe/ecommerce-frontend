import React from 'react';
import Menu from './Menu'
import jumbobg from '../user/img/AFRICA/abacha.png'

const Layout = ({

  title = "Title", 
  description ="Descritption", 
  children, 
  className,
}) => (

  <div>
    <Menu/>
    <div className="jumbotron"
    style={{ backgroundImage: `url(${jumbobg})` }}
    >
      <h2>{title}</h2>
      <p className='lead'>{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>

)

export default Layout;