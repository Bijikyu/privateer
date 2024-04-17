// This file defines the PrivateerDetailPage component, which renders details for a specific privateer using the PrivateerCard component.

import React from 'react'; // imports the React library for building user interfaces
import PrivateerCard from '../../components/PrivateerCard/PrivateerCard'; // imports the PrivateerCard component from the specified path

// This function component renders the detail page for a privateer.
function PrivateerDetailPage(props) {
  const privateer = props.location.state.privateer; // retrieves the privateer object from the router's location state
  return ( // returns the JSX for the PrivateerDetailPage component
    <> 
      <br></br> // creates a line break in the layout
      <h1>This Privateer</h1> // displays a heading for the page
      <PrivateerCard
        key={privateer._id} // assigns a unique key to the PrivateerCard component using the privateer's ID
        privateer={privateer} // passes the privateer object as a prop to the PrivateerCard component
      />
    </>
  );
}

export default PrivateerDetailPage; // exports the PrivateerDetailPage component for use in other parts of the application