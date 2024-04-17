// This is a React component for editing a "privateer" entity. It includes form handling and uses React Router for navigation.
import React, {Component} from 'react'; // Importing React and Component from the react package
import {Link} from 'react-router-dom'; // Importing Link from react-router-dom for navigation without page refresh
import ExplainerBooty from '../../components/ExplainerItems/ExplainerBooty.jsx' // Importing a custom component to explain the "booty" field
import ExplainerBounty from '../../components/ExplainerItems/ExplainerBounty.jsx' // Importing a custom component to explain the "bounty" field
import ExplainerCanon from '../../components/ExplainerItems/ExplainerCanon.jsx' // Importing a custom component to explain the "canon" field

// The EditPrivateerPage component allows users to edit details of a privateer entity.
class EditPrivateerPage extends Component {
  state = {
    invalidForm: false, // State to track if the form is valid or not
    formData: this.props.location.state.privateer // State to hold the form data passed via React Router
  };

  formRef = React.createRef(); // Creating a ref for the form to check its validity

  // Handles form submission, prevents default form submission and calls a function to update the privateer
  handleSubmit = e => {
    e.preventDefault(); // Prevents the default form submission action
    this.props.handleUpdatePrivateer(this.state.formData); // Calls the function to handle updating the privateer with the current form data
  };

  // Handles changes in the form inputs and updates the state accordingly
  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}; // Creates a new formData object with the updated field
    this.setState({
      formData, // Sets the new formData to state
      invalidForm: !this.formRef.current.checkValidity() // Updates the invalidForm state based on form validity
    });
  };

  // Renders the component's JSX
  render() {
    return (
      <>
        <br/>
        <h1>Edit Privateer</h1> // Heading for the page
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}> // The form element with a reference and onSubmit handler
          <div className="row frow"> // Container for form groups
            <div className="group"> // Group for the "booty" input field
              <ExplainerBooty/> // Component to explain the "booty" field
              <label>Product or Brand Name: </label> // Label for the "booty" input field
              <input className="form-control" name="booty" required // Input field for "booty" with validation
                value={this.state.formData.booty} onChange={this.handleChange}/> // Binding the input value and change handler
            </div>
            <div className="group"> // Group for the "bounty" input field
              <ExplainerBounty/> // Component to explain the "bounty" field
              <label>Bounty: $</label> // Label for the "bounty" input field
              <input className="form-control" name="bounty" required // Input field for "bounty" with validation
                value={this.state.formData.bounty} onChange={this.handleChange}/> // Binding the input value and change handler
            </div>
            <div className="group"> // Group for the "canon" textarea field
              <ExplainerCanon/> // Component to explain the "canon" field
              <label>Your Cease and Desist</label> // Label for the "canon" textarea field
              <textarea className="form-control" name="canon" // Textarea field for "canon"
                value={this.state.formData.canon} onChange={this.handleChange}/> // Binding the textarea value and change handler
            </div>
          </div>
          <button type="submit" className="btn btn-xs btn-danger" disabled={this.state.invalidForm}>RENEW YOUR PRIVATEER!</button> // Submit button, disabled if form is invalid
          <br></br>
          <br></br>
          <Link to='/'>CANCEL</Link> // Link to navigate back to the home page without submitting the form
        </form>
        <br></br>
      </>
    );
  }
}

export default EditPrivateerPage; // Exporting the EditPrivateerPage component for use in other parts of the application