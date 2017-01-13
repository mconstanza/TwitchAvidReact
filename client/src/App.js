import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameList from './components/GameList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {test: 'failure'};
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

// TODO: Remove this.test()
  componentDidMount = () => {
    this.test();
  }

  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h2>Test: {this.state.test} </h2>
        </div> */}
        <p className="App-intro">Games List Test</p>
        <GameList/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
