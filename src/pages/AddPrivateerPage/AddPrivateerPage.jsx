// This file defines a React component that allows users to commission a privateer by filling out a form with details such as product name, bounty, and a custom cease and desist letter.

import React, {Component} from 'react'; // Importing React and the Component class from the react package
import ExplainerBooty from '../../components/ExplainerItems/ExplainerBooty.jsx' // Importing the ExplainerBooty component from a relative path
import ExplainerBounty from '../../components/ExplainerItems/ExplainerBounty.jsx' // Importing the ExplainerBounty component from a relative path
import ExplainerCanon from '../../components/ExplainerItems/ExplainerCanon.jsx' // Importing the ExplainerCanon component from a relative path

class AddPrivateerPage extends Component { // Declaring a new class component named AddPrivateerPage that extends React.Component
    state = { // Initializing the component's state
        invalidForm: true, // State property to track if the form is valid or not
        formData: { // State property to hold form data
            booty: '', // Form field for product or brand name
            bounty: '10', // Form field for bounty with a default value of '10'
            canon: ceaseDesist // Form field for custom cease and desist letter, initialized with the ceaseDesist variable
        }
    };
    
    formRef = React.createRef(); // Creating a ref object to reference the form DOM element
    
    handleSubmit = e => { // Method to handle form submission
        e.preventDefault(); // Preventing the default form submission behavior
        this.props.handleAddPrivateer(this.state.formData); // Calling a method passed via props with the current form data
    }
    
    handleChange = e => { // Method to handle changes in form inputs
        const formData = {...this.state.formData, [e.target.name]: e.target.value}; // Creating a new formData object with the updated value for the changed input
        this.setState({ // Updating the component's state with the new formData and form validity
            formData, // Updated formData object
            invalidForm: !this.formRef.current.checkValidity() // Checking if the form is valid and updating the invalidForm state accordingly
        });
    };
    
    render(props) { // Render method to output the JSX for the component
        return ( // Returning the JSX to render
        <>          
            <br></br> // Line break for spacing
            <h1>Commission a Privateer!</h1> // Heading for the page
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}> // Form element with a reference, autoComplete off, and an onSubmit handler
                <div className="row frow"> // Container div for the form layout
                    <div className="group"> // Div for grouping related form elements
                        <ExplainerBooty/> // Component that explains the 'booty' field
                        <label>Product or Brand Name: </label> // Label for the 'booty' input field
                        <input className="form-control" name="booty" required // Input field for 'booty' with required attribute
                        value={this.state.formData.booty} onChange={this.handleChange}/> // Binding the input value to the state and setting up the change handler
                    </div>
                        &nbsp; // Non-breaking space for layout

                    <div className="group"> // Div for grouping related form elements
                        <ExplainerBounty/> // Component that explains the 'bounty' field
                        <label>Bounty (USD): </label> // Label for the 'bounty' input field
                        <input className="form-control" name="bounty" required // Input field for 'bounty' with required attribute
                        value={this.state.formData.bounty} onChange={this.handleChange}/> // Binding the input value to the state and setting up the change handler
                    </div>
                        &nbsp; // Non-breaking space for layout

                    <div className="group"> // Div for grouping related form elements
                        <ExplainerCanon/> // Component that explains the 'canon' field
                        <label>Armaments! Customise Your Cease and Desist</label><br></br> // Label for the 'canon' textarea
                        <textarea className="form-control" name="canon" // Textarea for 'canon'
                        value={this.state.formData.canon} onChange={this.handleChange}/> // Binding the textarea value to the state and setting up the change handler
                    </div>
                </div>
                <br></br> // Line break for spacing
                <button type="submit" className="btn btn-xs btn-danger" disabled={this.state.invalidForm}> COMMISSION YOUR PRIVATEER </button> // Submit button with disabled state based on form validity
            </form>
            <br></br> // Line break for spacing
            <br></br> // Line break for spacing
      </>
    );
}
}

let ceaseDesist = `It has been determined that you are currently using our Work ____ without our authorization // Template string for the cease and desist letter
which is copyrighted work in accordance with Title 17 of the U.S. Code.
We have found the unauthorized use of our Work being used at *(URL)*. 
Accordingly, we demand that you immediately remove the material and cease any further all of our Work, including 
any other infringements, otherwise you could be liable for statutory damages as high as $150,000 as set forth in 
Section 504(c)(2) therein.
If you do not cease the use of the aforementioned copyrighted material a lawsuit will be commenced against you. 
Furthermore, we demand that you immediately cease the use and distribution of all infringing works derived from 
the Work, and all copies, including electronic copies, of same, that you deliver to us, if applicable, all unused, 
undistributed copies of same, or destroy such copies immediately and that you desist from this or any other 
infringement of our rights in the future.
If we have not received an affirmative response from you by the last day of this month, 2020 indicating 
that you have fully complied with these requirements I shall consider taking any and all legal remedies available 
to rectify this situation.
Sincerely,
Your Name,
via Privateer.com`; // Variable holding the default text for the cease and desist letter

export default AddPrivateerPage; // Exporting the AddPrivateerPage component as the default export of the module