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
      task: [],
      activeTab: ''
    }
  }

  componentDidMount = () => document.addEventListener("keydown", this.handleAddPress);
  componentWillUnmount = () => document.addEventListener("keydown", this.handleAddPress);
  
  handleInputChange = (event) => this.setState({ input: event.target.value });

  handleAddPress = event => {
    if(event.keyCode === 13) {
      if(this.state.input) {
        this.setState(prevState => ({
          task: [...prevState.task, { task: this.state.input, completed: false} ]
        }))
      }
      this.setState({ input: ''})
    }
  }

  handleAddClick = () => {
    if(this.state.input) {
      this.setState(prevState => ({
          task: [...prevState.task, { task: this.state.input, completed: false} ]
      }))
    }
    this.setState({ input: ''})
  }

  getActiveTab = (tab) => this.setState({ activeTab: tab});

  handleCheckedChange = (event, i) => {
    let temp = [...this.state.task];

    temp[i].completed = event.target.checked;

    this.setState({ todo: temp })
  }

  render() {
    console.log(this.state.activeTab);
    return (
      <div className="App">
          <h1>#todo</h1>
          <Tabs 
            active={this.getActiveTab}
          />
          <AddTask 
            input={this.handleInputChange}
            clicked={this.handleAddClick}
            task={this.state.input}
          />
          <TaskList 
            task={this.state.task}
            changed={this.handleCheckedChange}
          />          
      </div>
    );
  }
}

export default App;

