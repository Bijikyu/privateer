// SignupPage module: This file defines a React component that represents a sign-up page, including a form and a message display.

import React, { Component } from 'react'; // Import React and Component from the react package
import SignupForm from '../../components/SignupForm/SignupForm'; // Import the SignupForm component from the specified path

class SignupPage extends Component { // Defines a new class SignupPage that extends React's Component class
  constructor(props) { // Constructor method for initializing the component with props
    super(props); // Calls the constructor of the parent class Component with props
    this.state = {message: ''} // Initializes the component's state with a message property set to an empty string
  }

  updateMessage = (msg) => { // Arrow function to update the component's state with a new message
    this.setState({message: msg}); // Calls setState to update the message in the component's state
  }

  render() { // Render method to describe what the UI should look like
    return ( // Return statement to specify the JSX that should be rendered
      <div className='SignupPage'> // A div element with a class name 'SignupPage' to contain the form and message
        <SignupForm {...this.props} updateMessage={this.updateMessage} /> // The SignupForm component with spread props and the updateMessage function passed as a prop
        <p>{this.state.message}</p> // A paragraph element to display the message from the component's state
      </div>
    );
  }
}

export default SignupPage; // Exports the SignupPage component as the default export of the module