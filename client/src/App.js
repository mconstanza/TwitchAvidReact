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
      activePage: 'home',
      token: "",
      user: null,
      shouldHide: false,
      isToggleOn: true,
      slide: false
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

  setActivePage = (page) => {
    this.setState({activePage: page});
  }

  setSearchQuery = (query) => {
    this.setState({searchQuery: query});
  }

  getCurrentUser = (username) => {
    this.setState({user: username});
  }

  setSearchStreams = (streams) => {
    this.setState({searchStreams: streams});
  }

  setSearchChannels = (channels) => {
    this.setState({searchChannels: channels});
  }

  setSearchGames = (games) => {
    this.setState({searchGames: games});

  }

  componentDidMount = () => {
    let token = localStorage.getItem("accessToken");
    console.log(token);

    let query = this.props.location.query;
    console.log(query.code);

    if(query.error == "access_denied") { // User logged out or revoked permissions
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

    getStreams = (search) => {
      searchHelpers.getStreams(search, function(streams){
        this.setState({streams: streams})
      }.bind(this))
    }

    onClick() {
        console.log("onclick");
        if (!this.state.shouldHide) {
            this.setState({shouldHide: true})
        } else {
            this.setState({shouldHide: false})
        }
        this.handleClick();
        this.onSlide();
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    onSlide() {
      if(!this.state.slide) {
        this.setState({slide: true})
      } else {
        this.setState({slide: false})
      }
    }

  render() {
    return (
      <div className="App">
        <Row id="primaryRow">
          <Column id="navCol" large={2}>
            <Navbar isActive={this.state.activePage}
              setSearchStreams={this.setSearchStreams}
              setSearchChannels={this.setSearchChannels}
              setSearchGames={this.setSearchGames}
              setActivePage={this.setActivePage}
              setSearchQuery={this.setSearchQuery}
              user={this.state.user}
              token={this.state.token}
              query={this.state.searchQuery}
            />
          </Column>

          <Column large={10}>
            <div id="theBar">
            <Row>
              <Column large={5}></Column>
              <Column large={2}><button className="arrow" onClick={this.onClick}>
                    {this.state.isToggleOn
                      ? <i className="fa">&#xf102;</i>
                      : <i className="fa">&#xf103;</i>}</button></Column>
              <Column large={5}></Column>
            </Row>
            <Row>
              <div className={
                // (this.state.shouldHide
                //     ? 'hidden'
                //     : '') + 
                this.state.slide ? 'slide' : 'slide-back'}>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
              {this.props.children &&
              React.cloneElement(this.props.children,
              { currentStreams: this.state.currentStreams,
                addStreamToCanvas: this.addStreamToCanvas,
                getStreams: this.getStreams,
                streams: this.state.streams})}
              </ReactCSSTransitionGroup>
              </div>
            </Row>
            </div>
            <SearchContainer streams={this.state.searchStreams}
              games={this.state.searchGames}
              channels={this.state.searchChannels}
              addStreamToCanvas= {this.addStreamToCanvas}
              component={this.props.children}>
            </SearchContainer>
            <StreamCanvas streams={this.state.currentStreams}
              removeStream = {this.removeStreamFromCanvas}/>
          </Column>

          {/* chat goes here */}
            <Column large={0}>

            </Column>

        </Row>
        </div>
      );
    }
  }

  export default App;
