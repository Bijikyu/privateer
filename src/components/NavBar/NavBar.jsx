import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <nav>
        <h4>Protect your copyrights and trademarks</h4>
        <NavLink exact to='/' className='NavBar-link'>Home</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <NavLink exact to='/add' className='NavBar-link'>Commission a Privateer</NavLink>
        <br></br>
      </nav>
    </div>
    :
    <>
    <h4>Protect your copyrights and trademarks</h4>
    </>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
