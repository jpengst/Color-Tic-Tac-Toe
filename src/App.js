import React, { Component } from 'react';
import './App.css';
import Gameboard from './board.js'

class App extends Component {
  render() {
    return (
      <div className="main">
          <Gameboard />
      </div>
    );
  }
}

export default App;
