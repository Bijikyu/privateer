import React from 'react';
import {Link} from 'react-router-dom';
import PrivateerList from "../../components/PrivateerList/PrivateerList.jsx"
import Explainer from "../../components/Explainer/Explainer.jsx"


const MainPage = (props) => {
  return (
    <div>
      <br></br>
      <PrivateerList 
        user={props.user}
        privateers={props.privateers}
        handleDeletePrivateer={props.handleDeletePrivateer}
      />
      <Explainer/>
      <h3>Protect your Brand or Product from Piracy and Exploitation</h3>
      <p className="text">This service enables businesses and creators to 
        automatically have the web monitored for their products and 
        brands in order to protect them from piracy and exploitation. 
        When an offender is found, a cease and desist letter is sent 
        out to the webmaster of the offending site.
        <br></br> 
        <br></br> 
        Once you are logged in, "Commission a Privateer" will appear 
        in the navigation bar. Just select that to choose the products and 
        brands you want to protect, to set a bounty for each succesful takedown, 
        and tweak the standard cease and desist letter. Once your 
        privateer is "commissioned" you will see them in the Fleet 
        section of the website. We are now monitoring the high seas (the web) 
        in pursuit of your wayward contraband.</p>
        <br></br> 
        <br></br> 
        <br></br> 
        <br></br> 
    </div>
  );
};

export default MainPage;



