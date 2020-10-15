import React from 'react';
import {Link} from 'react-router-dom';

function PrivateerListItem({privateer, handleDeletePrivateer}) { 
  return (
    
    <div className='panel panel-default ship'>
        <br></br>
        <Link className='title' to={{
            pathname: '/details',
            state: {privateer}
        }}>{privateer.booty}<br></br></Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className='btn btn-xs seaBtn'
          onClick={() => handleDeletePrivateer(privateer._id)
          }>Delete</button>
        <Link className='btn btn-xs seaBtn'to={{
            pathname: '/edit',
            state: {privateer}
        }}>Edit</Link>
    </div>
  );
}

export default PrivateerListItem;