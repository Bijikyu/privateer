// This React component renders a navigation bar that changes depending on the user's authentication status.
import React from 'react'; // Importing React library
import { NavLink } from 'react-router-dom'; // Importing NavLink component from react-router-dom for navigation

// Functional component NavBar2 that takes props and returns a navigation bar
const NavBar2 = (props) => {
  // Ternary operator to determine the content of the navigation bar based on user's authentication status
  let nav = props.user ? // Checking if user object exists in props
    <div id="log" className="navBit"> // Container div for the logged-in user navigation
      <nav> // Navigation wrapper
        <span className='NavBar-welcome'>Ahoy, {props.user.name}!</span> // Displaying welcome message with user's name
        <br></br> // Line break for styling
        <NavLink to='' onClick={props.handleLogout} className='NavBar-link'>Log Out</NavLink> // NavLink for logging out
      </nav>
    </div>
    :
    <div id="log" className="navBit"> // Container div for the logged-out user navigation
      <NavLink to='/login' className='NavBar-link'>Log In</NavLink> // NavLink to login page
      &nbsp;&nbsp;|&nbsp;&nbsp; // Non-breaking spaces and pipe character for styling
      <NavLink to='/signup' className='NavBar-link'>Sign Up</NavLink> // NavLink to signup page
    </div>;
  return (
    <div className='NavBar'> // Container div for the entire NavBar component
      {nav} // Inserting the determined navigation content
    </div>
  );
};

export default NavBar2; // Exporting NavBar2 component for use in other parts of the application