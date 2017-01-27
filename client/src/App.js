import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './overlay.css';


import Twitch from './config/Twitch';
import helpers from './utils/helpers';
import SearchHelpers from './utils/searchHelpers';

import StreamCanvas from './components/StreamCanvas';

import GameList from './components/GameList';
import StreamsList from './components/StreamsList';
import Navbar from './components/Navbar';
import SearchContainer from './components/search/SearchContainer';
import ChatContainer from './components/ChatContainer';
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
      searchStreams: [],
      streams:[] ,
      searchGames: [],
      activePage: 'home',
      token: "",
      user: null,
      currentChatChannel: "",
      searching: false,
      searchFocus: false,
      shouldShowBox: false, // show/hide chat
      shouldShowBox2: true // show/hide navbar
    };

    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSlide = this.onSlide.bind(this);
  }

  addStreamToCanvas = (stream) => {
    if(this.state.user) { // add to history when start stream
      let data = {
        channel: stream.channel.name,
        game: stream.game,
        dateViewed: Date.now()
      }
      helpers.postHistory(this.state.user.name, data, function(response) {
        console.log(response);
      })
    }
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
// SEARCH /////////////////////////////////////////////////////////////
  setSearchQuery = (query) => {

    if (query == ""){
      this.setState({searching: false, searchStreams: [], searchGames: []})
    }
    else{

      this.setState({searching: true})

      SearchHelpers.searchStreams(query, 25, function(streams){
        this.setState({searchStreams: streams})
      }.bind(this));
    }
    this.setState({searchQuery: query});
  }


  setCurrentUser = (user) => {
    this.setState({user: user});
  }

  toggleSearching = (boolean) => {
    this.setState({searching: boolean});
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
      localStorage.setItem("accessToken", "null");
      this.setState({token: ""});
    }

    else if(token && token !== "null") {
      this.setState({token: token});
    }

    else if(query.code) {
      helpers.getToken(query.code, function(data) {
        localStorage.setItem("accessToken", data.access_token);
        this.setState({token: data.access_token});
      }.bind(this));

    }

  }

  getHistory = () => {
    if(this.state.user) {
    helpers.getHistory(this.state.user.name, function(history) {
      history.viewHistory.sort(function(a, b) {
        if(a.dateViewed < b.dateViewed) return 1;
        else if(a.dateViewed > b.dateViewed) return -1;
        else return 0;
      })
      this.setState({history: history.viewHistory});
    }.bind(this));
    }
  }

  getFollowed = (token) => {
    helpers.getFollowed(token, function(following) {
      this.setState({streams: following});
    }.bind(this));
  }

  getStreams = (search) => {
    SearchHelpers.getStreams(search, function(streams){
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


    toggleChat = () => {
      this.setState({
        shouldShowBox: !this.state.shouldShowBox
      });
    }
    toggleSideBar = () => {
      this.setState({
        shouldShowBox2: !this.state.shouldShowBox2
      });
    }

    showChat = () => {
      this.setState({
        shouldShowBox: true
      });
    }


  render() {
    let toggleChatBox = this.state.shouldShowBox ? "showBox" : "hideBox";
    let toggleSideNav = this.state.shouldShowBox2 ? "showBox2" : "hideBox2";
    var barClass;
            if(this.state.theBarShow == false){
                barClass="slideUP";
            }
            else{
                barClass="slideDown"
            }


    return (
      <div className="App">
        <div id="primaryRow">
          <ReactCSSTransitionGroup
          transitionName="toggleNav"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
           {this.state.shouldShowBox2 &&
          <div id="navCol">
            <Navbar isActive={this.state.activePage}
              setSearchStreams={this.setSearchStreams}
              setSearchGames={this.setSearchGames}
              setActivePage={this.setActivePage}
              setSearchQuery={this.setSearchQuery}

              setCurrentUser={this.setCurrentUser}

              setSearchFocus={this.setSearchFocus}
              removeSearchFocus={this.removeSearchFocus}
              toggleSearching={this.toggleSearching}

              user={this.state.user}
              token={this.state.token}
              query={this.state.searchQuery}
              toggleSideBar={this.toggleSideBar}
              shouldShowBox2={this.state.shouldShowBox2}
            />
            <div id="sideBar" onClick={this.toggleSideBar}>
                <div className="fi-list toggleNavBar"/>
              </div>
          </div>}

          {!this.state.shouldShowBox2 &&
            <div className="hiddenNav" onClick={this.toggleSideBar}>
                <div className="fi-list verticalBar"/>
            </div>
          }

          </ReactCSSTransitionGroup>

          <div className={"contentContainer contentContainerTransitions " + toggleChatBox + " " + toggleSideNav}>

            <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={200} transitionLeaveTimeout={200}>


                  <div id="theBar" className={barClass}>

                  {this.props.children && !this.state.searching &&
                  React.cloneElement(this.props.children,

                  { currentStreams: this.state.currentStreams,
                    addStreamToCanvas: this.addStreamToCanvas,
                    getStreams: this.getStreams,
                    searchStreams: this.state.searchStreams,
                    streams: this.state.streams,
                    history: this.state.history,
                    getFollowed: this.getFollowed,
                    getHistory: this.getHistory,
                    token: this.state.token,
                    user: this.state.user,
                    searching: this.state.searching,
                    theBarShow: this.state.theBarShow,
                    user: this.state.user})}

                    {this.state.searching &&
                      <StreamsList
                          currentStreams = {this.state.currentStreams}
                          addStreamToCanvas = {this.addStreamToCanvas}
                          getStreams= {this.getStreams}
                          searchStreams= {this.state.searchStreams}
                          streams= {this.state.streams}
                          history= {this.state.history}
                          getFollowed= {this.getFollowed}
                          getHistory= {this.getHistory}
                          token= {this.state.token}
                          user= {this.state.user}
                          searching= {this.state.searching}
                          theBarShow= {this.state.theBarShow}
                          user= {this.state.user}
                        />
                    }


                  </div>
              </ReactCSSTransitionGroup>

              <div id="toggleBar" onClick={this.toggleTheBar}>
                <div className="fi-list toggleButton"/>
              </div>

              {this.state.shouldShowBox &&
                <div className="toggleChatDivClose chatToggleClose" onClick={this.toggleChat}>
                  <div className="fi-list chatHamburger"/>
                </div>
            }

              {!this.state.shouldShowBox &&
               <div className="toggleChatDiv chatToggle" onClick={this.toggleChat}>
                 <div className="fi-list chatHamburger"/>
               </div>
             }

            <StreamCanvas streams={this.state.currentStreams}
              removeStream = {this.removeStreamFromCanvas}
              selected={this.selectedStream}
              setChatChannel={this.setChatChannel}
              user={this.state.user}
              token={this.state.token}
              showChat={this.showChat}
            />
          </div>

           <ReactCSSTransitionGroup
          transitionName="chat"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>


           {this.state.shouldShowBox && <div className="chatContainer">
          <ChatContainer showChat={this.showChat} currentChatChannel={this.state.currentChatChannel} toggleChat={this.toggleChat} shouldShowBox={this.state.shouldShowBox}/>
            </div>}
          </ReactCSSTransitionGroup>


          </div>
        </div>
      );
    }
  }


  export default App;
