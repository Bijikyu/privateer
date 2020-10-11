import React from 'react';
import {Route} from 'react-router-dom';

const MainPage = (props) => {
  return (
    <Route render={() => (
        <p>MainPage</p>
      )}/>
  );
};

export default MainPage;