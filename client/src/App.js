import React, { Component } from 'react';
import './App.css';


import Twitch from './config/Twitch';
import helpers from './utils/helpers';

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
      activePage: 'home',
      token: "",
      currentUser: ""
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

  getCurrentUser = (username) => {
    this.setState({currentUser: username});
  }

  componentDidMount = () => {
    helpers.postHistory('yuuterus', {channel: 'imaqtpie', game: 'League of Legends', dateViewed: })

    let token = localStorage.getItem("accessToken");
    console.log(token);

    let query = this.props.location.query;
    console.log(query.code);
    
    if(token && token !== "null") {
      console.log("token");
      this.setState({token: token});
    }

    else if(query.code) {
      console.log("code");
      helpers.getToken(query.code, function(data) {
        console.log(data);
        this.setState({token: data.access_token});
      }.bind(this));

    }

    else if(query.error == "access_denied") { // User logged out or revoked permissions
      console.log("error");
      localStorage.setItem("accessToken", "null");
      this.setState({token: ""});
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
