import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <NavLink exact to='/' className='NavBar-link'>Privateers</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink exact to='/add' className='NavBar-link'>Commission a Privateer</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavLink to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
