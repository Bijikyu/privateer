import React from 'react';
import PrivateerListItem from '../PrivateerListItem/PrivateerListItem';

function PrivateerList(props) {
  return (
    <>
      {!props.user ? ( <></> ) : (
        <div>
            <h1>Your Fleet</h1>
            {props.privateers.map(privateer => 
                <PrivateerListItem
                privateer={privateer}
                handleDeletePrivateer={props.handleDeletePrivateer}
                key={privateer._id}/>
            )}
        </div>
      )}
    </>
  );
}

export default PrivateerList;