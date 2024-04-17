// This React component represents an item in a list of privateers. It includes links to details and edit pages, and a delete button.

import React from 'react'; // Importing React library
import {Link} from 'react-router-dom'; // Importing Link component from react-router-dom for navigation

// This function component represents a single item in a list of privateers, with links to view details and edit, as well as a delete button.
function PrivateerListItem({privateer, handleDeletePrivateer}) { 
  return (
    <div className='panel panel-default ship'> // A div with classes for styling, represents the container for a privateer item
        <br></br> // Line break for spacing
        <Link className='title' to={{ // Link component to navigate to the details page with privateer state
            pathname: '/details',
            state: {privateer}
        }}>{privateer.booty}<br></br></Link> // Displays the privateer's booty and another line break for spacing
        <br></br> // Line break for spacing
        <br></br> // Line break for spacing
        <br></br> // Line break for spacing
        <br></br> // Line break for spacing
        <button className='btn btn-xs seaBtn' // Button with classes for styling
          onClick={() => handleDeletePrivateer(privateer._id) // Event handler for the delete button, calls handleDeletePrivateer with privateer's id
          }>Delete</button> // Text displayed on the delete button
        <Link className='btn btn-xs seaBtn'to={{ // Link component styled as a button to navigate to the edit page with privateer state
            pathname: '/edit',
            state: {privateer}
        }}>Edit</Link> // Text displayed on the edit link/button
    </div>
  );
}

export default PrivateerListItem; // Exporting the component for use in other parts of the application