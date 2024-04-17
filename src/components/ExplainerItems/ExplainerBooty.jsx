// This React component is used to display an explainer section with an image and text.
import React from 'react'; // Imports the React library for building components
import '../Explainer/Explainer.css'; // Imports CSS styles for the component

// This functional component displays an image and a descriptive text
const ExplainerBooty = (props) => { // Declares a functional component named ExplainerBooty
  return ( // Returns the JSX for rendering the component
        <div className="explainerDiv"> // Creates a div with a class name for styling
            <img src={'https://i.imgur.com/ElyvhK3.png'} alt="site name"></img> // Displays an image with a source URL and alternative text
            <br></br> // Inserts a line break
            <p>You tell us the brand or product <br></br>to look out for</p> // Displays a paragraph with text and a line break
        </div>
  );
};

export default ExplainerBooty; // Exports the component for use in other files