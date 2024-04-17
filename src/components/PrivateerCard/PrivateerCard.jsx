// This is a React component that renders a card for a privateer with details such as bounty and a cease and desist letter.

import React from 'react'; // Importing React library
import {Link} from 'react-router-dom'; // Importing Link component from react-router-dom for navigation

// This function component PrivateerCard takes a privateer object as a prop and returns JSX for rendering the privateer's details.
function PrivateerCard({privateer}) { 
  return ( // Returns the JSX for the component
    <div className='panel panel-default'> // This div is a container with default panel styling
      <div className="panel-heading"> // This div represents the header of the panel
        <h3 className='panel-title'>{privateer.booty}</h3> // Displays the privateer's booty as a title
      </div>
      <div className='panel-body'> // This div represents the body of the panel
        <dl> // Description list to display the privateer's details
          <dt>Bounty: ${privateer.bounty}</dt> // Description term for displaying the bounty amount
          <br></br> // Line break for spacing
          <dt>Your Cease and Desist Letter for this Product/Brand</dt> // Description term for the cease and desist letter label
          <br></br> // Line break for spacing
          <dd className="text">{privateer.canon}</dd> // Description details for displaying the cease and desist letter content
        </dl>
      </div>
      <div className='panel-footer'> // This div represents the footer of the panel
        <Link to='/'>BACK TO YE OLD WHALE ROAD</Link> // Link component for navigation back to the home page
      </div>
      <br></br> // Line break for spacing
      <br></br> // Line break for spacing
      <br></br> // Line break for spacing
      <br></br> // Line break for spacing
    </div>
  );
}

export default PrivateerCard; // Exports the PrivateerCard component for use in other parts of the application