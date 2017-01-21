import React, {Component} from 'react';

import Twitch from '../config/Twitch';
import helpers from '../utils/helpers'

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
    }

    componentDidUpdate() {
      if(!this.state.user && this.props.token)
        this.getUserInfo();
    }

    getUserInfo() {
      var token = this.props.token;

      helpers.getUserTwitchAPI(token, function(user) {
        helpers.getLocalUser({name: user.name}, function(user) {
          console.log(user);
        })
        this.setState({user: user});
      }.bind(this));

    }

    userLogged() {
      if(this.state.user) {
        return (
        <div>
          <p >Welcome, {this.state.user.display_name}!</p>
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