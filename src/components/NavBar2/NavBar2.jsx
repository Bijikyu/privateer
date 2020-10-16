import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar2 = (props) => {
  let nav = props.user ?
    <div id="log" className="navBit">
      <nav>
        <span className='NavBar-welcome'>Ahoy, {props.user.name}!</span>
        <br></br>
        <NavLink to='' onClick={props.handleLogout} className='NavBar-link'>Log Out</NavLink>
      </nav>
    </div>
    :
    <div id="log" className="navBit">
      <NavLink to='/login' className='NavBar-link'>Log In</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to='/signup' className='NavBar-link'>Sign Up</NavLink>
    </div>;
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar2;
