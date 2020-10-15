import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditPrivateerPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.privateer
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePrivateer(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <br/>
        <h1>Edit Privateer</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          
          <div className="form-group">
            <label>Product or Brand Name: </label>
            <input className="form-control" name="booty" required
              value={this.state.formData.booty} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Bounty: $</label>
            <input className="form-control" name="bounty" required
              value={this.state.formData.bounty} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Armaments! <br></br>Amend your Cease and Desist</label>
            <textarea className="form-control" name="canon"
              value={this.state.formData.canon} onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-xs" disabled={this.state.invalidForm}>RENEW YOUR PRIVATEER!</button>
          <br></br>
          <br></br>
          <Link to='/'>CANCEL</Link>
        </form>
        <br></br>
      </>
    );
  }
}

export default EditPrivateerPage;