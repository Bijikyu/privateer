import React from 'react';
import {Link} from 'react-router-dom';

function PrivateerListItem({privateer, handleDeletePrivateer}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{privateer.booty}</h3>
      </div>
      <div className='panel-footer'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/details',
            state: {privateer}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {privateer}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeletePrivateer(privateer._id)}
        >
          SCUTTLE (DELETE)
        </button>
      </div>
    </div>
  );
}

export default PrivateerListItem;