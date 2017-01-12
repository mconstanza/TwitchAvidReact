import React, { Component } from 'react';


class Practice extends Component {

  constructor(props) {
    super(props);
    this.state = {testAgain: 'failure'};
  }

// SAMPLE FRONT-END REQUEST TO ACCESS API
  testAgain = () => {
    fetch('/')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        testAgain: json.success
      })
    })
  }

// TODO: Remove this.test() 
  componentDidMount = () => {
    this.testAgain();
  }

  render() {
    return (
      <div>
        <p>Route success: {this.state.testAgain}</p>
      </div>
    );
  }
}

export default Practice;
