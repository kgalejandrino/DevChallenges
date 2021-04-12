import React, { Component } from 'react';
import './App.css';
import Tabs from '../components/Tabs/Tabs';
import AddTask from '../components/AddTask/AddTask';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>#todo</h1>
          <Tabs />
          <AddTask />
      </div>
    );
  }
}

export default App;

