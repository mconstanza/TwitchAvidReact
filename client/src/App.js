import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Practice from './Practice';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {test: 'failure',
    testAgain: 'failure'};
  }

// SAMPLE FRONT-END REQUEST TO ACCESS API
  test = () => {
    fetch('/test')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        test: json.success
      })
    })
  }
    SecondTest = () => {
    fetch('/second-test')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        testAgain: json.success, test: json.originalmessage
      })
    })
  }
  // testAgain(){
  //   fetch('/')
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json);
  //     this.setState({
  //       testAgain: json.success
  //     })
  //   })
  // }
//   testAgain(){
// fetch('/t')
// .then(function(response) {
//  console.log(response);
// }).then(function(err) {
//   console.log(err);
// })
// }

// TODO: Remove this.test() 
  componentDidMount = () => {
    this.test();
    this.SecondTest();
  }
  componentDidUpdate(){
    console.log(this.state.testAgain)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h2>Test: {this.state.testAgain} </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Practice testAgain={this.state.test} />
        </div>
      </div>
    );
  }
}

export default App;

