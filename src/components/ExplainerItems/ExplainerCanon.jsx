// This is a React functional component that renders an explainer section with an image and text.

import React from 'react'; // imports the React library for creating components
import '../Explainer/Explainer.css'; // imports CSS styles for the component

// This functional component returns JSX that represents a section with an image and customizable text.
const ExplainerCanon = (props) => { // defines a functional component named ExplainerCanon
  return ( // starts the return statement of the functional component
        <div className="explainerDiv"> // creates a div element with a class name for styling
            <img src={'https://i.imgur.com/96Yv9RC.png'} alt="site name"></img> // creates an image element with a source URL and alternative text
            <br></br> // creates a line break in the document
            <p>We provide a Cease & Desist letter, <br></br>which you can customise</p> // creates a paragraph element with text and a line break
        </div> // closes the div element
  ); // ends the return statement
};

export default ExplainerCanon; // exports the ExplainerCanon component for use in other files