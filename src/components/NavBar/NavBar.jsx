import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <nav>
      <NavLink exact to='/' className='NavBar-link'>Home</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink exact to='/add' className='NavBar-link'>Commission a Privateer</NavLink>
      <br></br>
      <span className='NavBar-welcome'>Ahoy, {props.user.name}!</span>
      &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
      <NavLink to='' onClick={props.handleLogout} className='NavBar-link'>Log Out</NavLink>
      </nav>
    </div>
    :
    <div>
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

export default NavBar;
