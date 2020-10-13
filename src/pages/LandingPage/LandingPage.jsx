import React from 'react';
import {Link} from 'react-router-dom';
import PrivateerList from "../../components/PrivateerList/PrivateerList.jsx"


const MainPage = (props) => {
  return (
    <div>
      <br></br>
      <h2>Protect your Brand or Product from Piracy and Exploitation</h2>

      <PrivateerList 
        user={props.user}
        privateers={props.privateers}
        handleDeletePrivateer={props.handleDeletePrivateer}
      />
    </div>
  );
};

export default MainPage;



