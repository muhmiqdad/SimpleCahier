import React from 'react';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      printers: ['Iam'],
      image: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.printButton = this.printButton.bind(this);
  }
  render() {
    return (
      <React.Fragment>
      <button onClick={this.printButton}>This is ac{this.state.isToggleOn ? 'ON' : 'OFF'} paragraph.</button>
      <button onClick={this.handleClick}>another{this.state.isToggleOn ? 'ON' : 'OFF'} paragraph.</button>
      <p>{this.state.printers}</p>
      <img onLoad={this.load}  id="scream" src="icon2.png" alt="The Scream"/>
      </React.Fragment>
    );
}

export default App;
