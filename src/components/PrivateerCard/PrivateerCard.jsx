import React from 'react';
import {Link} from 'react-router-dom';

function PrivateerCard({privateer}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{privateer.booty}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Bounty</dt>
          <dd>{privateer.bounty}</dd>
          <dt>Canon</dt>
          <dd>{privateer.canon}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>BACK TO YE OLD WHALE ROAD</Link>
      </div>
    </div>
  );
}

export default PrivateerCard;