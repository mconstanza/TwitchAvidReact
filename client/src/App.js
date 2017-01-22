import React, { Component } from 'react';
import './App.css';


import Twitch from './config/Twitch';
import helpers from './utils/helpers';
import searchHelpers from './utils/searchHelpers';

import StreamCanvas from './components/StreamCanvas';

import GameList from './components/GameList';
import StreamsList from './components/StreamsList';
import Navbar from './components/Navbar';
import SearchContainer from './components/search/SearchContainer';
import Chat from './components/Chat';
// CSS Foundation
import Foundation from 'react-foundation';
import {Row, Column} from 'react-foundation';
//ReactCSSTransitionGroup
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStreams: [],
      theBarShow: true,
      activePage: 'home',
      token: "",
      user: null,
      currentChatChannel: ""
    };

    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSlide = this.onSlide.bind(this);
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

  selectedStream = (streamPosition) => {

    var stream = this.state.currentStreams;
    var mainStream = stream[0];

    stream[0] = stream[streamPosition];
    stream[streamPosition] = mainStream;

    this.setState({currentStreams: stream});
  }

  setActivePage = (page) => {
    this.setState({activePage: page});
  }

  setSearchQuery = (query) => {
    this.setState({searchQuery: query});
  }

  setCurrentUser = (user) => {
    this.setState({user: user});
  }

  setSearchStreams = (streams) => {
    this.setState({searchStreams: streams});
  }

  setSearchGames = (games) => {
    this.setState({searchGames: games});

  }
  setChatChannel = (channel) => {
    this.setState({currentChatChannel: channel})
  }

  componentWillMount = () => {

    let token = localStorage.getItem("accessToken");
    console.log(token);

    let query = this.props.location.query;
    console.log(query.code);

    if(query.error == "access_denied") {
      console.log("error");
      localStorage.setItem("accessToken", "null");
      this.setState({token: ""});
    }

    else if(token && token !== "null") {
      console.log("token");
      this.setState({token: token});
    }

    else if(query.code) {
      console.log("code");
      helpers.getToken(query.code, function(data) {
        console.log(data);
        localStorage.setItem("accessToken", data.access_token);
        this.setState({token: data.access_token});
      }.bind(this));

    }

  }

  getFollowed = (token) => {
    console.log(token);
    helpers.getFollowed(token, function(following) {
      console.log(following);
      this.setState({streams: following});
    }.bind(this));
  }

  getStreams = (search) => {
    searchHelpers.getStreams(search, function(streams){
      this.setState({streams: streams})
    }.bind(this))
  }

    onClick = () => {
        if (!this.state.theBarShouldHide) {
            this.setState({theBarShouldHide: true})
        } else {
            this.setState({theBarShouldHide: false})
        }
        this.handleClick();
        this.onSlide();
    }

    handleClick = () => {
        this.setState(prevState => ({
            theBarIsToggleOn: !prevState.theBarIsToggleOn
        }));
    }

    onSlide = () => {
      if(!this.state.theBarSlide) {
        this.setState({theBarSlide: true})
      } else {
        this.setState({theBarSlide: false})
      }
    }

    toggleTheBar = () => {
      this.setState({theBarShow: !this.state.theBarShow})
    }

  render() {
    return (
      <div className="App">
        <div id="primaryRow">
          <div id="navCol">
            <Navbar isActive={this.state.activePage}
              setSearchStreams={this.setSearchStreams}
              setSearchGames={this.setSearchGames}
              setActivePage={this.setActivePage}
              setSearchQuery={this.setSearchQuery}
              setCurrentUser={this.setCurrentUser}
              user={this.state.user}
              token={this.state.token}
              query={this.state.searchQuery}
            />
          </div>



          <div className="contentContainer">
            <div id="theBar" className={
                this.state.slide ? 'slide' : 'slide-back'}>
  
                <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
              {this.props.children &&
              React.cloneElement(this.props.children,

              { currentStreams: this.state.currentStreams,
                addStreamToCanvas: this.addStreamToCanvas,
                getStreams: this.getStreams,
                streams: this.state.streams,
                getFollowed: this.getFollowed,
                token: this.state.token})}

                  

              </ReactCSSTransitionGroup>
              </div> 
              <div id="toggleBar" onClick={this.toggleTheBar}>
                <span className="fi-list toggleButton"/>
              </div>

            <SearchContainer streams={this.state.searchStreams}
              games={this.state.searchGames}
              addStreamToCanvas= {this.addStreamToCanvas}
              component={this.props.children}>
            </SearchContainer>

            <StreamCanvas streams={this.state.currentStreams}
              removeStream = {this.removeStreamFromCanvas}
              selected={this.selectedStream}
              setChatChannel={this.setChatChannel}/>
          </div>


            <div className="chatContainer">
              <Chat currentChatChannel={this.state.currentChatChannel}/>
            </div>

        </div>
        </div>
      );
    }
  }

  export default App;
