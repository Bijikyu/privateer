// LoginPage component is a React component that handles user login functionality.
// It maintains form data within its state and interacts with a user service to authenticate users.
import React, { Component } from "react"; // Importing React and Component from react package.
import userService from "../../utils/userService"; // Importing userService for authentication.

// LoginPage class component extending React's Component class.
class LoginPage extends Component {
  // Initializing state with invalidForm flag and formData object.
  state = {
    invalidForm: true, // State property to track form validity.
    formData: { // State property to hold form data for email, password, and message.
      email: "", // Email field initialized as an empty string.
      password: "", // Password field initialized as an empty string.
      message: "" // Message field initialized as an empty string.
    },
  };

  formRef = React.createRef(); // Creating a ref for the form element.

  // handleSubmit is an asynchronous function that handles form submission.
  handleSubmit = async (e) => {
    e.preventDefault(); // Preventing the default form submission behavior.
    try {
      await userService.login(this.state.formData); // Attempting to log in with formData.

      this.props.handleSignupOrLogin(); // Calling a function passed via props to handle successful login.
      this.props.history.push("/"); // Redirecting to the home page after successful login.
    } catch (err) {
      this.updateMessage(err.message); // Updating the message state if there is an error.
    }
  };

  // handleChange is a function that updates the formData in state on each input change.
  handleChange = (e) => {
    const formData = { // Creating a new formData object with updated values.
      ...this.state.formData, // Spreading the existing formData.
      [e.target.name]: e.target.value, // Updating the changed value based on input name.
    };
    this.setState({ // Setting the new formData and invalidForm flag in state.
      formData,
      invalidForm: !this.formRef.current.checkValidity(), // Checking form validity.
    });
  };

  // updateMessage is a function that sets the message in state.
  updateMessage = (msg) => {
      this.setState({message: msg}); // Setting the message state with the passed message.
  }

  // render method returns the JSX for the login form.
  render() {
    return (
      <>
        <br></br> // Line break for styling.
        <h2>Log In</h2> // Heading for the login form.
        <br></br> // Line break for styling.
        <form className='logForm' ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}> // Form element with a reference, autoComplete off, and an onSubmit handler.
          <div className="form-group"> // Container for the email input field.
            <label>Your email (required)</label> // Label for the email input field.
            <input className="form-control" name="email" required // Email input field with required attribute.
                value={this.state.formData.email} onChange={this.handleChange}/> // Binding value to state and setting onChange handler.
          </div>
          <div className="form-group"> // Container for the password input field.
            <label>Your password</label> // Label for the password input field.
            <input type="password" className="form-control" name="password" // Password input field of type password.
              value={this.state.formData.password} onChange={this.handleChange}/> // Binding value to state and setting onChange handler.
          </div>
          <button type="submit" className="btn btn-danger" disabled={this.state.invalidForm}>LOG IN</button> // Submit button, disabled based on form validity.
        </form>
      </>
    );
  }
}
export default LoginPage; // Exporting LoginPage component for use in other modules.