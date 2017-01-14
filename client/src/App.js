import React, { Component } from 'react';
import './App.css';

import StreamCanvas from './components/StreamCanvas';
import GameList from './components/GameList';
import StreamsList from './components/StreamsList';

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
        {this.props.children && React.cloneElement(this.props.children, { currentStreams: this.state.currentStreams, addStreamToCanvas: this.addStreamToCanvas })}
        <StreamCanvas streams={this.state.currentStreams}/>
      </div>
    );
  }
}

export default App;
