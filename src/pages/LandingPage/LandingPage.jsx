// This is a React component file that defines the MainPage component. It imports necessary modules and components, sets up the MainPage functional component, and exports it for use in other parts of the application.

import React from 'react'; // Importing the React library to enable JSX syntax and component logic
import {Link} from 'react-router-dom'; // Importing Link component from react-router-dom for client-side navigation
import PrivateerList from "../../components/PrivateerList/PrivateerList.jsx" // Importing PrivateerList component from the specified path
import Explainer from "../../components/Explainer/Explainer.jsx" // Importing Explainer component from the specified path

// Defines the MainPage functional component that renders the main content of the page
const MainPage = (props) => {
  return (
    <div> // Start of the main container div
      <br></br> // Line break for spacing
      <PrivateerList // PrivateerList component that takes in user, privateers, and handleDeletePrivateer props
        user={props.user} // Prop that passes the user data to the PrivateerList component
        privateers={props.privateers} // Prop that passes the list of privateers to the PrivateerList component
        handleDeletePrivateer={props.handleDeletePrivateer} // Prop that passes the delete handler function to the PrivateerList component
      />
      <Explainer/> // Explainer component that provides additional information or context
      <h3>Protect your Brand or Product from Piracy and Exploitation</h3> // Heading for the section
      <p className="text">This service enables businesses and creators to // Paragraph with class "text" describing the service
        automatically have the web monitored for their products and 
        brands in order to protect them from piracy and exploitation. 
        When an offender is found, a cease and desist letter is sent 
        out to the webmaster of the offending site.
        <br></br> // Line break for spacing
        <br></br> // Line break for spacing
        Once you are logged in, "Commission a Privateer" will appear 
        in the navigation bar. Just select that to choose the products and 
        brands you want to protect, to set a bounty for each succesful takedown, 
        and tweak the standard cease and desist letter. Once your 
        privateer is "commissioned" you will see them in the Fleet 
        section of the website. We are now monitoring the high seas (the web) 
        in pursuit of your wayward contraband.</p>
        <br></br> // Line break for spacing
        <br></br> // Line break for spacing
        <br></br> // Line break for spacing
        <br></br> // Line break for spacing
    </div> // End of the main container div
  );
};

export default MainPage; // Exports the MainPage component for use in other parts of the application