import React from 'react'


export default class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    name : props.name,
    elements: [],
    message: ''
    }
  }
  
  changeName(){
  this.setState({
  name : 'Anna'
  });
  }
  
  addElement() {
  const oldElements = this.state.elements;
  this.setState({
  elements: oldElements.concat(oldElements.length + 1)
  });
  }
  
  changeMessage(event){
  this.setState({
  message:event.target.value
  });
  }
  
  render () {
  let updateParagraph= '';
  if (this.state.name != this.props.name){
  updateParagraph = <p>Name updated!</p>
  }
  
  let list= this.state.elements.map(
    el => <li key = {el}>{el}</li>
  );
  return (
      <div>
        <p>{this.state.name}</p>
        {updateParagraph}
        <button onClick={this.changeName.bind(this)}>Change Name</button>
        <button onClick={this.addElement.bind(this)}>Add Element</button>
        <ul>
          {list}
        </ul>
        <input 
        type ='text'   
        value = {this.state.message}
        onChange ={this.changeMessage.bind(this)}></input>
        <p>{this.state.message}</p>
      </div>
    );
  }
  }
  
  