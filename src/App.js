import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Timer app built in React js.</h2>
        <Timer start={Date.now()} />

      </div>
      </div>
    );
  }
}

export default App;
