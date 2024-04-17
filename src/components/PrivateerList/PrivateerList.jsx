// This file defines the PrivateerList component which renders a list of PrivateerListItem components if a user is logged in and there are privateers in the list.

import React from 'react'; // Importing React library
import PrivateerListItem from '../PrivateerListItem/PrivateerListItem'; // Importing PrivateerListItem component

// This function component PrivateerList takes props and returns a list of PrivateerListItem components or nothing if no user or privateers are present.
function PrivateerList(props) { // Declaring the PrivateerList functional component
  return ( // Starting the return statement
    <> // React Fragment to group a list of children without adding extra nodes to the DOM
      {!props.user || !props.privateers.length ? ( <></> ) : ( // Conditional rendering: if no user or no privateers, render nothing
        <div className="fleet"> // Container div for the fleet
            <h1>Your Fleet</h1> // Heading for the fleet list
            <div className="row"> // Container div for the list items
            {props.privateers.map(privateer => // Mapping over privateers array to render list items
                <PrivateerListItem // Rendering a PrivateerListItem component for each privateer
                privateer={privateer} // Passing the privateer object as a prop
                handleDeletePrivateer={props.handleDeletePrivateer} // Passing the handleDeletePrivateer function as a prop
                key={privateer._id}/> // Using privateer's _id as a key for React's reconciliation process
            )}
            </div>
        </div>
      )}
    </>
  );
}

export default PrivateerList; // Exporting the PrivateerList component for use in other files