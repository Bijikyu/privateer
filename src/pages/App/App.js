import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddPrivateerPage from "../AddPrivateerPage/AddPrivateerPage";
import EditPrivateerPage from "../EditPrivateerPage/EditPrivateerPage";
import PrivateerDetailPage from "../PrivateerDetailPage/PrivateerDetailPage";

import userService from '../../utils/userService';
import privateerService from '../../utils/privateerService';
import * as privateerAPI from "../../utils/privateerService";

import NavBar from '../../components/NavBar/NavBar';
import NavBar2 from '../../components/NavBar2/NavBar2';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      privateers: [],
      user: userService.getUser()
    };
  }

  handleAddPrivateer = async (newPrivData) => {
    const newPriv = await privateerAPI.create(newPrivData);
    this.setState((state) => ({
      privateers: [...state.privateers, newPriv]
    }),
    () => this.props.history.push('/'));
  }

  handleUpdatePrivateer = async (updatedPrivData) => {
    const updatedPrivateer = await privateerAPI.update(updatedPrivData);
    const newPrivateersArray = this.state.privateers.map((priv) =>
      priv._id === updatedPrivateer._id ? updatedPrivateer : priv
    );
    this.setState(
      { privateers: newPrivateersArray },
      () => this.props.history.push("/")
    );
  };

  handleDeletePrivateer = async (id) => {
    await privateerAPI.deleteOne(id);
    this.setState(
      (state) => ({
        privateers: state.privateers.filter((priv) => priv._id !== id),
      }),
      () => this.props.history.push("/")
    );
  }; 

  handleLogout = () => {
    userService.logout();
    this.setState({ 
      user: null,
      privateers: [] 
    });
  }

  handleSignupOrLogin = async () => {
    this.setState({ 
      user: userService.getUser(),
      privateers: await privateerService.getAll()  
    });
  };

  componentDidMount = async () => {
    const privateers = await privateerAPI.getAll();
    console.log("little string", privateers);
    this.setState({ privateers });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <img src={'/images/ship_only.png'} alt="site logo" className="navBit"></img>
              <NavBar 
                user={this.state.user}
              />
              <NavBar2 
                user={this.state.user} 
                handleLogout={this.handleLogout} 
              />
            </div>
        </header>
        <main> 
          <Switch>
            <Route exact path="/" render={() => (
              <LandingPage user={this.state.user}
                privateers={this.state.privateers}
                handleDeletePrivateer={this.handleDeletePrivateer}
              />)}
            />
            <Route exact path="/signup" render={({ history }) => (
              <SignupPage history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />)}
            />
            <Route exact path="/login" render={({ history }) => (
              <LoginPage history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />)}
            />
            <Route exact path="/add" render={() => (
              <AddPrivateerPage user={this.state.user}
              handleAddPrivateer={this.handleAddPrivateer}/>
              )}
            />
            <Route exact path="/details" render={({ location }) => (
              <PrivateerDetailPage location={location} />
              )}
            />
            <Route exact path="/edit" render={({ location }) => (
              <EditPrivateerPage location={location}
                handleUpdatePrivateer={this.handleUpdatePrivateer}
              />)}
            />
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
