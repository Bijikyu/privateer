import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ExplainerBooty from '../../components/ExplainerItems/ExplainerBooty.jsx'
import ExplainerBounty from '../../components/ExplainerItems/ExplainerBounty.jsx'
import ExplainerCanon from '../../components/ExplainerItems/ExplainerCanon.jsx'

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
          <div className="row frow">
            <div className="group">
              <ExplainerBooty/>
              <label>Product or Brand Name: </label>
              <input className="form-control" name="booty" required
                value={this.state.formData.booty} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <ExplainerBounty/>
              <label>Bounty: $</label>
              <input className="form-control" name="bounty" required
                value={this.state.formData.bounty} onChange={this.handleChange}/>
            </div>
            <div className="group">
              <ExplainerCanon/>
              <label>Your Cease and Desist</label>
              <textarea className="form-control" name="canon"
                value={this.state.formData.canon} onChange={this.handleChange}/>
            </div>
          </div>
          <button type="submit" className="btn btn-xs btn-danger" disabled={this.state.invalidForm}>RENEW YOUR PRIVATEER!</button>
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