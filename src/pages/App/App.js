import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import userService from '../../utils/userService';





class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      difficulty: 'Easy',
      scores: [],
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
          Privateer
          <NavBar 
            user={this.state.user} 
            handleLogout={this.handleLogout} 
          />
        </header>
      <Switch>
        <Route render={() => (
          <MainPage/>
        )}/>
      </Switch>
    </div>
    );
  }
}

export default App;
