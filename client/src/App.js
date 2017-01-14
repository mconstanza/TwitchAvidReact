import React, { Component } from 'react';
import './App.css';

import StreamCanvas from './components/StreamCanvas';

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
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h2>Test: {this.state.test} </h2>
        </div> */}
        <p className="App-intro"></p>
        {React.cloneElement(this.props.children, { addStreamToCanvas: this.addStreamToCanvas })}
        <StreamCanvas streams={this.state.currentStreams}/>
      </div>
    );
  }
}

export default App;
