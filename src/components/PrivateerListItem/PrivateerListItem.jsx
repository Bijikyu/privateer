import React from 'react';
import {Link} from 'react-router-dom';

function PrivateerListItem({privateer, handleDeletePrivateer}) { 
  return (
    <div className='panel panel-default ship'>
        <br></br>
        <Link className='panel-heading panel-title' to={{
            pathname: '/details',
            state: {privateer}
        }}>{privateer.booty}<br></br></Link>
        <br></br>
        <Link className='btn btn-xs btn-warning'to={{
            pathname: '/edit',
            state: {privateer}
        }}>Edit<br></br></Link>
        
        <button className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeletePrivateer(privateer._id)
          }>Delete</button>

    </div>
  );
}

export default PrivateerListItem;