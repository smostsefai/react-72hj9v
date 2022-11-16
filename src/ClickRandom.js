import React from "react"

export default class ClickRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  setRandom() {
    this.setState({
      num: Math.floor(Math.random() * this.props.maxNum)
    });
  }

  handleClick(evt) {
    this.setRandom();
  }

  render() {
    return (
        <div>
            <h1> Number = {this.state.num}</h1>
            <br/>
            <button onClick = {this.handleClick}> Generate Random  </button>
        </div>
    );
  }
} 
