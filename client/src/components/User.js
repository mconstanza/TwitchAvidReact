import React, {Component} from 'react';

import Twitch from '../config/Twitch';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
    }

    componentWillUpdate() {
      if(!this.state.user)
        this.getUserInfo();
    }

    getUserInfo() {
      var token = this.props.token;
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
        if(this.props.token)
          this.setState({user: json});
      });
    }

    userLogged() {
      console.log(this.state.user);
      if(this.state.user) {
        return (
        <div>
          <p >Welcome back, {this.state.user.display_name}!</p>
          {/*<img src={this.state.user.logo}/>
                    <p>Bio: {this.state.user.bio}</p>*/}
        </div>)
      } else {
        return(<p>Not Logged In</p>)
      }
    }

    render() {
        return (
            <div className="user">
              <div>{this.userLogged()}</div>
            </div>
        )

    }
}

module.exports = User;