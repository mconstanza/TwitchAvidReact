import React, {Component} from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	UserName: '',
    	Password: ''
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
     switch (event.target.id) {
            case "username":
                this.setState({UserName: event.target.value});
                break;
            case "password":
                this.setState({Password: event.target.value});
                break;
        }
  }

  handleSubmit(event) {
    alert('A user tried logging in Username: ' + this.state.UserName + ' Password: ' + this.state.Password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.UserName} id="username" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.Password} id="password" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports = NameForm;