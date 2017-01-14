import React, { Component } from 'react';
import './App.css';

import StreamCanvas from './components/StreamCanvas';
import GameList from './components/GameList';
import StreamsList from './components/StreamsList';

// CSS Foundation
import Foundation from 'react-foundation';
import {Row, Column} from 'react-foundation';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: 'failure',
      currentStreams: []
    };
  }

  addStreamToCanvas = (stream) => {
    var streams = this.state.currentStreams;
    streams.push(stream);
    this.setState({currentStreams: streams})
  }

// TODO: Remove this.test()
  componentDidMount = () => {
  }

  render() {
    return (
      <div className="App">

        <p className="App-intro"></p>
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
              <StreamCanvas streams={this.state.currentStreams}/>
            </Column>
          </Row>
        </Column>
        </Row>
      </div>
    );
  }
}

export default App;
