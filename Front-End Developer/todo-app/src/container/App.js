import React, { Component } from 'react';
import './App.css';
import Tabs from '../components/Tabs/Tabs';
import AddTask from '../components/AddTask/AddTask';
import TaskList from '../components/TaskList/TaskList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      addTask: false,
      task: []
    }
  }

  handleInputChange = (event) => this.setState({ input: event.target.value });

  handleAddClick = () => {
    if(this.state.input) {
      this.setState(prevState => ({
          task: [...prevState.task, this.state.input]
      }))
    }
    this.setState({ input: ''})
  }

  render() {
    return (
      <div className="App">
          <h1>#todo</h1>
          <Tabs />
          <AddTask 
            input={this.handleInputChange}
            clicked={this.handleAddClick}
            task={this.state.input}
          />
          {this.state.task.map((task, index) => {
              return <TaskList key={index}>{task}</TaskList>
            })
          }
      </div>
    );
  }
}

export default App;

