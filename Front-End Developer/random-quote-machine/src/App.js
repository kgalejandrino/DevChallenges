import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Quote from './components/Quote/Quote';
import Author from './components/Author/Author';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="random-container">
          <span>random</span>
          <span class="material-icons">autorenew</span>
        </div>
        <Quote />
        <Author />
      </div>
    )
  }
}

export default App;

