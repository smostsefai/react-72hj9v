import React from 'react';

export default class BrokenClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <h1>The Button is  { this.state.clicked ? 'clicked' : 'not clicked'} </h1>
        <button onClick={this.handleClick}>Broken</button>
      </div>
    );
  }
} 
