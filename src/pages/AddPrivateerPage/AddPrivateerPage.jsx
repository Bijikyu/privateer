import React, {Component} from 'react';


class AddPrivateerPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            booty: '',
            bounty: '10',
            canon: ceaseDesist
        }
    };
    
    formRef = React.createRef();
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddPrivateer(this.state.formData);
    }
    
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };
    
    render(props) {
        return (
            <>
        <h1>Commission a Privateer!</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          
          <div className="form-group">
            <label>Product or Brand Name: </label>
            <input className="form-control" name="booty" required
            value={this.state.formData.booty} onChange={this.handleChange}/>
          </div>
            &nbsp;
          <div className="form-group">
            <label>Bounty (USD): </label>
            <input className="form-control" name="bounty" required
              value={this.state.formData.bounty} onChange={this.handleChange}/>
          </div>
            &nbsp;
          <div className="form-group">
            <label>Armaments! Customise Your Cease and Desist</label><br></br>
            <br></br>
            <textarea className="form-control" name="canon"
              value={this.state.formData.canon} onChange={this.handleChange}/>
          </div>
          <br></br>
          <button type="submit" className="btn" disabled={this.state.invalidForm}> COMMISSION YOUR PRIVATEER </button>
        </form>
      </>
    );
}
}

let ceaseDesist = `It has been determined that you are currently using our Work ____ without our authorization 
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
via Privateer.com`;

export default AddPrivateerPage;