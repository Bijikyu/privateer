import React from 'react';
import {Link} from 'react-router-dom';
import PrivateerList from "../../components/PrivateerList/PrivateerList.jsx"


const MainPage = (props) => {
  return (
    <div>
      <Link href="" className="btn">Commission a Privateer!</Link>
      <h2>Protect your Brand or Product from Piracy and Exploitation</h2>
      
      <PrivateerList />

    </div>
  );
};

export default MainPage;