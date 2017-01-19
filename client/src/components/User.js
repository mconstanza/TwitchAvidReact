import React, {Component} from 'react';

import Twitch from '../config/Twitch';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
    }

    getUserInfo() {
      var token = this.props.userInfo;
      console.log(this.props.userInfo);
      fetch('https://api.twitch.tv/kraken/user', {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': Twitch.clientID,
          'Authorization': "OAuth " + token
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({user: json})
      })
    }

    
    componentWillUpdate() {
      this.getUserInfo();
    }
    // componentWillReceiveProps() {
    //   this.getUserInfo();
    // }

    userLogged() {
      if(this.state.user) {
        return (
        <div>
          <p>Username: {this.state.user.display_name}</p>
          <img src={this.state.user.logo}/>
          <p>Bio: {this.state.user.bio}</p>
        </div>)
      } else {
        return(<p>Not Logged In</p>)
      }
    }

    render() {
        // this.getUserInfo();
        return (
            <div className="user">
              <div>{this.userLogged()}</div>
              {/*<Subscription userId={this.state.user._id} />*/}
            </div>
        )

    }
}

module.exports = User;