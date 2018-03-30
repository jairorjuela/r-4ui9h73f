import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: " "
    }
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.handleChange.bind(this)} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }

  handleChange(event){
    var texto = event.target.value
    this.setState({
      text: texto
    });
  }
}

export default App;
