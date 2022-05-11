import React from 'react';
import { NavLink } from 'react-router-dom';
import Cartbutton from './button/Cartbutton';
import Login from './button/Login';
import Signin from './button/Signin';

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 mx-2 ms-4">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar" >
    <NavLink to="/" style={{textDecoration:"none",paddingRight:"2px",fontSize:"15px",color:"black"}}>Home</NavLink>
    <NavLink to="/about" style={{textDecoration:"none",paddingRight:"2px",fontSize:"15px",color:"black"}}>About</NavLink>
    <NavLink to="/product" style={{textDecoration:"none",paddingRight:"2px",fontSize:"15px",color:"black"}}>product</NavLink>
    <NavLink to="/contact" style={{textDecoration:"none",paddingRight:"2px",fontSize:"15px",color:"black"}}>contact</NavLink>
    <NavLink to="/cart" style={{textDecoration:"none",paddingRight:"2px",fontSize:"15px",color:"black"}}>cart</NavLink>
    
    </span>
  </button>

  <div className="collapse navbar-collapse py-2 ms-2" id="navbarSupportedContent">
    <ul className="navbar-nav  mr-auto">
      <li className="nav-item  active">
        <NavLink className="nav-link " to="/">Home </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link " to="/product">Product</NavLink>
      </li>
      <li className="nav-item ">
      <NavLink className="nav-link " to="/about">About</NavLink>
    </li>
   
    <li className="nav-item ">
    <NavLink className="nav-link" to="/contact">Contact</NavLink>
  </li>
 
      
     
    </ul>
   
    <NavLink className="navbar-brand mx-auto fw-bold" to="/">APPLE MART</NavLink>
  
  <div className='mx-2 p-2 '>
    <Signin/>

 <Login/>
<Cartbutton/>
 </div>
   
 </div>
 </nav>
 
        </>
        )
};

export default Header;