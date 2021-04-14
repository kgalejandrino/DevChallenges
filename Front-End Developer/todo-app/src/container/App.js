import React, { Component } from 'react';
import './App.css';
import Tabs from '../components/Tabs/Tabs';
import AddTask from '../components/AddTask/AddTask';
import TaskList from '../components/TaskList/TaskList';
import DeleteButton from '../components/DeleteButton/DeleteButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      task: [],
      activeTab: 'All'
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
    let renderedTask = this.state.task ? [...this.state.task] : null;

    if(this.state.activeTab === 'Active') {
      renderedTask = renderedTask.filter(task => !task.completed)
    } else if(this.state.activeTab === 'Completed') {
      renderedTask = renderedTask.filter(task => task.completed)
    }

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
            task={renderedTask}
            changed={this.handleCheckedChange}
            tab={this.state.activeTab}
          /> 
          {this.state.activeTab === 'Completed' 
            ? <DeleteButton />            
            : null
          }
      </div>
    );
  }
}

export default App;

