import React, { Component } from 'react';
import './App.css';


import Twitch from './config/Twitch';

import StreamCanvas from './components/StreamCanvas';

import GameList from './components/GameList';
import StreamsList from './components/StreamsList';
import Navbar from './components/Navbar';
import SearchContainer from './components/SearchContainer';

// CSS Foundation
import Foundation from 'react-foundation';
import {Row, Column} from 'react-foundation';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: 'failure',
      currentStreams: [],
      activePage: 'home'
    };
  }

  addStreamToCanvas = (stream) => {
    var streams = this.state.currentStreams;
    streams.push(stream);
    this.setState({currentStreams: streams})
  }

  removeStreamFromCanvas = (streamId) => {
    console.log("Stream ID: ", streamId)
    var streams = this.state.currentStreams;
    for (let i=0; i<streams.length; i++){
      if (streams[i]._id == streamId){
        streams.splice(i, 1);
      }
    }
    this.setState({currentStreams: streams});
  }

  setActivePage = (page) => {
    this.setState({activePage: page});
  }

  setSearchQuery = (query) => {
    this.setState({searchQuery: query});
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

        <Navbar isActive={this.state.activePage} setActivePage={this.setActivePage} setSearchQuery={this.setSearchQuery}/>
        <SearchContainer query={this.state.searchQuery}/>
        {/* {this.props.children} */}
        <Row id='primaryRow'>
          <Column large={12}>
            <Row id='navigation'>
              <Column large={12}>
                {this.props.children && React.cloneElement(this.props.children, { currentStreams: this.state.currentStreams, addStreamToCanvas: this.addStreamToCanvas })}
              </Column>
            </Row>
          <Row id="streamCanvasRow">
            <Column large={12}>
              <StreamCanvas streams={this.state.currentStreams} removeStream = {this.removeStreamFromCanvas}/>
            </Column>
          </Row>
        </Column>
        </Row>
      </div>
    );
  }
}

export default App;
