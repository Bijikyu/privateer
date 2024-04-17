// This is a React functional component that renders an explainer section with an image and text.
import React from 'react'; // imports the React library for building components
import '../Explainer/Explainer.css'; // imports CSS styles for the component

// This functional component returns JSX that represents a section with an image and descriptive text.
const ExplainerBounty = (props) => { // defines a functional component named ExplainerBounty
  return ( // returns JSX to be rendered by the component
        <div className="explainerDiv"> // creates a div with a class name for styling
            <img src={'https://i.imgur.com/ijHcDxw.png'} alt="site name"></img> // displays an image with a source URL and alternative text
            <br></br> // inserts a line break
            <p>Name your own price per removal <br></br>of exploitive web pages</p> // displays a paragraph with text and a line break
        </div>
  );
};

export default ExplainerBounty; // exports the component for use in other parts of the application