// SignupForm component handles the user signup process
import React, { Component } from 'react'; // Import React and Component from react package
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import userService from '../../utils/userService'; // Import userService for handling signup logic

// Define SignupForm class component that extends React Component
class SignupForm extends Component {

  // Initialize component state with form fields
  state = {
    name: '', // Holds the name input value
    email: '', // Holds the email input value
    company:'', // Holds the company input value
    password: '', // Holds the password input value
    passwordConf: '' // Holds the password confirmation input value
  };

  // Handle change in form inputs and update state accordingly
  handleChange = (e) => {
    this.props.updateMessage(''); // Clear any messages
    this.setState({
      [e.target.name]: e.target.value // Update the state for the specific form field
    });
  }

  // Handle form submission
  handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await userService.signup(this.state); // Attempt to sign up with the current state values
      this.props.handleSignupOrLogin(); // Handle post-signup/login actions
      this.props.history.push('/'); // Redirect to home page after successful signup
    } catch (err) {
      this.props.updateMessage(err.message); // Update message with error from signup attempt
    }
  }

  // Check if the form is valid for submission
  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf); // Form is invalid if any field is empty or passwords do not match
  }

  // Render method returns the component markup
  render() {
    return (
      <div>
        <br></br> {/* Line break for spacing */}
        <h2 className="header-footer">Sign Up</h2> {/* Sign Up header */}
        <br></br> {/* Line break for spacing */}
        <form className="form-horizontal logForm" onSubmit={this.handleSubmit} > {/* Form with onSubmit event handler */}
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /> {/* Input for name */}
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} /> {/* Input for email */}
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="company" className="form-control" placeholder="Company" value={this.state.company} name="company" onChange={this.handleChange} /> {/* Input for company */}
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} /> {/* Input for password */}
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} /> {/* Input for password confirmation */}
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default btn-danger" disabled={this.isFormInvalid()}>Sign Up</button> {/* Sign Up button, disabled if form is invalid */}
              &nbsp;&nbsp; {/* Non-breaking spaces for spacing */}
              <br></br> {/* Line break for spacing */}
              <br></br> {/* Line break for spacing */}
              <Link to='/'>Cancel</Link> {/* Link to cancel and return to home page */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm; // Export SignupForm component for use in other modules