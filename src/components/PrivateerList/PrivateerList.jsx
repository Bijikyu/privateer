import React from 'react';
import PrivateerListItem from '../PrivateerListItem/PrivateerListItem';

function PrivateerList(props) {
  return (
    <>
      {!props.user || !props.privateers.length ? ( <></> ) : (
        <div className="fleet">
            <h1>Your Fleet</h1>
            <div className="row">
            {props.privateers.map(privateer => 
                <PrivateerListItem
                privateer={privateer}
                handleDeletePrivateer={props.handleDeletePrivateer}
                key={privateer._id}/>
            )}
            </div>
        </div>
      )}
    </>
  );
}

export default PrivateerList;