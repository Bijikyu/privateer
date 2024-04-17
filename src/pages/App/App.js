```jsx
// This file defines the main React component for the application, including routing and state management.

import React, {Component} from 'react'; // Importing React and the Component class from the react package.
import './App.css'; // Importing the App stylesheet.
import { Route, Switch } from 'react-router-dom'; // Importing Route and Switch components from react-router-dom for routing.

import LandingPage from '../LandingPage/LandingPage'; // Importing the LandingPage component.
import SignupPage from '../SignupPage/SignupPage'; // Importing the SignupPage component.
import LoginPage from '../LoginPage/LoginPage'; // Importing the LoginPage component.
import AddPrivateerPage from "../AddPrivateerPage/AddPrivateerPage"; // Importing the AddPrivateerPage component.
import EditPrivateerPage from "../EditPrivateerPage/EditPrivateerPage"; // Importing the EditPrivateerPage component.
import PrivateerDetailPage from "../PrivateerDetailPage/PrivateerDetailPage"; // Importing the PrivateerDetailPage component.

import userService from '../../utils/userService'; // Importing the userService for user-related operations.
import privateerService from '../../utils/privateerService'; // Importing the privateerService for privateer-related operations.
import * as privateerAPI from "../../utils/privateerService"; // Importing all exports from privateerService as privateerAPI.

import NavBar from '../../components/NavBar/NavBar'; // Importing the NavBar component.
import NavBar2 from '../../components/NavBar2/NavBar2'; // Importing the NavBar2 component.
import Footer from '../../components/Footer/Footer'; // Importing the Footer component.

// The main App component that manages state and routing for the application.
class App extends Component {
  constructor() { // Constructor method to initialize the state.
    super(); // Calls the constructor of the parent class (Component).
    this.state = { // Initializing the state of the component.
      privateers: [], // An array to store privateer data.
      user: userService.getUser() // Retrieves the current user from userService.
    };
  }

  // Method to handle adding a new privateer.
  handleAddPrivateer = async (newPrivData) => {
    const newPriv = await privateerAPI.create(newPrivData); // Calls the API to create a new privateer.
    this.setState((state) => ({ // Updates the state with the new privateer.
      privateers: [...state.privateers, newPriv]
    }),
    () => this.props.history.push('/')); // Navigates to the home page after adding the privateer.
  }

  // Method to handle updating an existing privateer.
  handleUpdatePrivateer = async (updatedPrivData) => {
    const updatedPrivateer = await privateerAPI.update(updatedPrivData); // Calls the API to update the privateer.
    const newPrivateersArray = this.state.privateers.map((priv) => // Creates a new array with the updated privateer.
      priv._id === updatedPrivateer._id ? updatedPrivateer : priv
    );
    this.setState(
      { privateers: newPrivateersArray }, // Sets the new array of privateers in the state.
      () => this.props.history.push("/") // Navigates to the home page after updating the privateer.
    );
  };

  // Method to handle deleting a privateer.
  handleDeletePrivateer = async (id) => {
    await privateerAPI.deleteOne(id); // Calls the API to delete the privateer by id.
    this.setState(
      (state) => ({
        privateers: state.privateers.filter((priv) => priv._id !== id), // Filters out the deleted privateer from the state array.
      }),
      () => this.props.history.push("/") // Navigates to the home page after deleting the privateer.
    );
  }; 

  // Method to handle user logout.
  handleLogout = () => {
    userService.logout(); // Calls the logout method from userService.
    this.setState({ 
      user: null, // Sets the user in the state to null.
      privateers: [] // Clears the privateers array in the state.
    });
  }

  // Method to handle user signup or login.
  handleSignupOrLogin = async () => {
    this.setState({ 
      user: userService.getUser(), // Updates the user in the state with the current user.
      privateers: await privateerService.getAll() // Fetches all privateers and updates the state.
    });
  };

  // Lifecycle method that runs after the component mounts.
  componentDidMount = async () => {
    const privateers = await privateerAPI.getAll(); // Fetches all privateers from the API.
    console.log("little string", privateers); // Logs the fetched privateers to the console.
    this.setState({ privateers }); // Updates the state with the fetched privateers.
  }
  
  // Render method to output JSX for the component.
  render() {
    return (
      <div className="App"> // Main container div for the App component.
        <header className="App-header"> // Header section of the App.
          <div className="row"> // A div with a row class for layout purposes.
            <img src={'/images/ship_only.png'} alt="site logo" className="navBit"></img> // An image element for the site logo.
              <NavBar 
                user={this.state.user} // NavBar component with the current user passed as a prop.
              />
              <NavBar2 
                user={this.state.user} // NavBar2 component with the current user and logout handler passed as props.
                handleLogout={this.handleLogout} 
              />
            </div>
        </header>
        <main> // Main content area of the App.
          <Switch> // Switch component to handle routing between different paths.
            <Route exact path="/" render={() => ( // Route for the home page.
              <LandingPage user={this.state.user}
                privateers={this.state.privateers}
                handleDeletePrivateer={this.handleDeletePrivateer}
              />)}
            />
            <Route exact path="/signup" render={({ history }) => ( // Route for the signup page.
              <SignupPage history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />)}
            />
            <Route exact path="/login" render={({ history }) => ( // Route for the login page.
              <LoginPage history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />)}
            />
            <Route exact path="/add" render={() => ( // Route for the page to add a new privateer.
              <AddPrivateerPage user={this.state.user}
              handleAddPrivateer={this.handleAddPrivateer}/>
              )}
            />
            <Route exact path="/details" render={({ location }) => ( // Route for the privateer details page.
              <PrivateerDetailPage location={location} />
              )}
            />
            <Route exact path="/edit" render={({ location }) => ( // Route for the page to edit an existing privateer.
              <EditPrivateerPage location={location}
                handleUpdatePrivateer={this.handleUpdatePrivateer}
              />)}
            />
          </Switch>
        </main>
        <Footer/> // Footer component of the App.
      </div>
    );
  }
}

export default App; // Exports the App component for use in other files.