import React, { Component } from 'react';


class Practice extends Component {

  constructor(props) {
    super(props);
    // this.state = {testAgain: 'failure'};
    this.state = {
      message: 'Hello! This is my component.',
      src: "https://media.tenor.co/images/7131af15926a2a4eb4a740257a9a5a19/raw"
    };
  }

// SAMPLE FRONT-END REQUEST TO ACCESS API
  // testAgain = () => {
  //   fetch('/')
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json);
  //     this.setState({
  //       testAgain: json.success
  //     })
  //   })
  // }

// TODO: Remove this.test() 
  // componentDidMount = () => {
  //   this.testAgain();
  // }

  render() {
    return (
      <div>
        <p className="blue-text text-darken-2 flow-text bold">{this.state.message}</p>
        <img className="z-depth-5" src={this.state.src}/>
      </div>
    );
  }
}

export default Practice;
