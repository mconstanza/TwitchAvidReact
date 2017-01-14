import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Twitch from './config/Twitch';
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
    let query = this.props.location.query;
    console.log(query.code);
    if(query.code) {
      var headers = {
        client_id: Twitch.clientID,
        client_secret: Twitch.secret,
        redirect_uri: "http://localhost:3000",
        grant_type: "authorization_code",
        code: query.code
      };

      var params = function() {
        let header = [];

        for(let key in headers) {
          header.push(key + '=' + headers[key]); 
        }

        return header.join('&');
      }();

      console.log(params);
      fetch("https://api.twitch.tv/kraken/oauth2/token?" + params, {
        method: "POST"
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
    }
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
        {this.props.children}
        <GameList/>
      </div>
    );
  }
}

export default App;
