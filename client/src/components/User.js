import React, {Component} from 'react';

import Twitch from '../config/Twitch';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
    }

    
    userLogged() {
      if(this.props.user) {
        return (
        <div>
          <p >Welcome back, {this.props.user.display_name}!</p>
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