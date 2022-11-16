import React from "react";

export default class Rando extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.makeTimer();      
  }

  makeTimer() {
    setInterval(() => {
      this.setState({
        num: Math.floor(Math.random() * this.props.maxNum)
      });
    }, 1000);
  }

  render() {
    return <h1>Random number:  {this.state.num}</h1>;
  }
} 
