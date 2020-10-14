import React from 'react';
import {Link} from 'react-router-dom';
import PrivateerList from "../../components/PrivateerList/PrivateerList.jsx"


const MainPage = (props) => {
  return (
    <div>
      <br></br>
      <h3>Protect your Brand or Product from Piracy and Exploitation</h3>
      <br></br>
      <p className="text">This service enables businesses and creators to 
        automatically have the web monitored for their products and 
        brands in order to protect them from piracy and exploitation. 
        When an offender is found, a cease and desist letter is sent 
        out to the webmaster of the offending site.
        <br></br> 
        <br></br> 
        Just click "Commission a Privateer" above 
        on the navigation bar and to choose the products and brands you 
        want to protect, to set a bounty for each succesful takedown, 
        and tweak the standard cease and desist letter. Once your 
        privateer is "commissioned" you will see them in the Fleet 
        section of this page below. We are now monitoring the high seas (the web) 
        in pursuit of your wayward contraband.</p>
      <PrivateerList 
        user={props.user}
        privateers={props.privateers}
        handleDeletePrivateer={props.handleDeletePrivateer}
      />
    </div>
  );
};

export default MainPage;



