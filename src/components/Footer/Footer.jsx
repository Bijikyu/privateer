// This is a React functional component that renders the footer of a webpage.

import React from 'react'; // Importing the React library to use in this component.

// This is a functional component named Footer that accepts props and returns JSX for the footer.
const Footer = (props) => { // Declares a constant Footer which is a functional component.
  return ( // Returns the JSX to be rendered by this component.
    <footer> // JSX tag representing the footer element of the HTML.
      <p>Privateer © 2020 Brian Quezada </p> // Paragraph element with copyright text.
    </footer> // Closing tag for the footer element.
  );
};

export default Footer; // Exports the Footer component to be used in other parts of the application.