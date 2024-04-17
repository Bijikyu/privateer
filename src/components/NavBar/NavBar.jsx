// NavBar component for providing navigation links based on user authentication status
import React from 'react'; // Importing React to enable JSX syntax and component structure
import { NavLink } from 'react-router-dom'; // Importing NavLink from react-router-dom for navigation

// Functional component NavBar that takes props as an argument
const NavBar = (props) => {
  // Ternary operator to determine the navigation bar content based on user authentication
  let nav = props.user ? // Checking if the user prop is truthy
    <div> // JSX div element to wrap the navigation bar
      <nav> // JSX nav element to define navigation links
        <img src={'/images/word_only.png'} alt="site name" className="navBit"></img> // JSX img element for the site logo
        <h4>Protect copyright & trademarks</h4> // JSX h4 element for the site slogan
        <NavLink exact to='/' className='NavBar-link'>Home</NavLink> // NavLink component for home link with exact matching
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; // Non-breaking spaces for visual separation of links
        <NavLink exact to='/add' className='NavBar-link'>Commission a Privateer</NavLink> // NavLink component for commission link with exact matching
        <br></br> // JSX br element for a line break
      </nav>
    </div>
    :
    <> // JSX fragment to group elements without adding extra nodes to the DOM
    <img src={'/images/word_only.png'} alt="site name" className="navBit"></img> // JSX img element for the site logo
    <h4>Protect copyright & trademarks</h4> // JSX h4 element for the site slogan
    </>;

  // Returning the JSX to render the NavBar component
  return (
    <div className='NavBar'> // JSX div element with a className for styling
      {nav} // Inserting the determined navigation content
    </div>
  );
};

export default NavBar; // Exporting NavBar component for use in other parts of the application