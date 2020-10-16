import React from 'react';
import './Explainer.css';
import ExplainerBooty from '../ExplainerItems/ExplainerBooty.jsx'
import ExplainerBounty from '../ExplainerItems/ExplainerBounty.jsx'
import ExplainerCanon from '../ExplainerItems/ExplainerCanon.jsx'

const Explainer = (props) => {
  return (
    <div className="row explainer">
        <br></br>
        <br></br>
        <ExplainerBooty/>
        <br></br>
        <br></br>
        <ExplainerBounty/>
        <br></br>
        <br></br>
        <ExplainerCanon/>
        <br></br>
        <br></br>
    </div>
  );
};

export default Explainer;