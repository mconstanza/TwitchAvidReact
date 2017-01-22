import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import Game from './Game';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
          <button className="arrow" onClick={this.props.toggle}>
                  {this.props.isToggleOn
                    ? <i className="fa">&#xf102;</i>
                    : <i className="fa">&#xf103;</i>}
          </button>
        )
    }
}

module.exports = ToggleButton;
