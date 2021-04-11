import React, { Component } from 'react';
import './App.css';
import Tabs from '../components/Tabs/Tabs';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>#todo</h1>
          <Tabs />
      </div>
    );
  }
}

export default App;

