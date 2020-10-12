import React, {Component} from 'react';

class AddPuppyPage extends Component {
  state = {
    invalidForm: true,
    formData: {}
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

  render() {
    return (
      <>
        <h1>Commission a Privateer!</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          
          <div className="form-group">
            <label>Product or Brand Name</label>
            <input className="form-control" name="booty" required
            value={this.state.formData.booty} onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>Bounty</label>
            <input className="form-control" name="bounty" required
              value={this.state.formData.bounty} onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label>Armaments! Customise Your Cease and Desist</label>
            <input className="form-control" name="canon"
              value={this.state.formData.canon} onChange={this.handleChange}/>
          </div>

          <button type="submit" className="btn" disabled={this.state.invalidForm}> COMMISSION YOUR PRIVATEER </button>
        </form>
      </>
    );
  }
}

export default AddPrivateerPage;