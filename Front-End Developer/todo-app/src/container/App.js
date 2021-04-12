import React, { Component } from 'react';
import './App.css';
import Tabs from '../components/Tabs/Tabs';
import AddTask from '../components/AddTask/AddTask';
import TaskList from '../components/TaskList/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>#todo</h1>
          <Tabs />
          <AddTask />
          <TaskList />
      </div>
    );
  }
}

export default App;

