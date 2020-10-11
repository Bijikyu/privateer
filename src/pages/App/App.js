import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route render={() => (
          <MainPage/>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
