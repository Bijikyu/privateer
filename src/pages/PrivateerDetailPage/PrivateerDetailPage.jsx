import React from 'react';
import PrivateerCard from '../../components/PrivateerCard/PrivateerCard';

function PrivateerDetailPage(props) {
  const puppy = props.location.state.privateer;
  return (
    <>
      <h1>This Privateer</h1>
      <PrivateerCard
        key={privateer._id}
        privateer={privateer}
      />
    </>
  );
}

export default PrivateerDetailPage;