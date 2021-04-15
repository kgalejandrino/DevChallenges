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

  componentDidMount = () => { 
    document.addEventListener("keydown", this.handleAddTaskPress);
  }

  componentWillUnmount = () => document.addEventListener("keydown", this.handleAddTaskPress);
  
  handleInputChange = (event) => this.setState({ input: event.target.value });

  handleAddTaskPress = event => {
    if(event.keyCode === 13) {
      if(this.state.input) {
        this.setState(prevState => ({
          task: [...prevState.task, { task: this.state.input, completed: false} ]
        }))
      }
      this.setState({ input: ''})
    }
  }

  handleAddTaskClick = () => {
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

  handleDeleteTaskClicked = (i) => {
    let temp = [...this.state.task];
    temp.splice(i, 1);
    this.setState({ task: temp });
  }

  handleDeleteAllTask = () => this.setState({ task: []})

  getLocalStoredTask = (data) => this.setState({ task : data })

  render() {   
    return (
      <div className="App">
          <h1>#todo</h1>
          <Tabs 
            active={this.getActiveTab}
          />
          <AddTask 
            input={this.handleInputChange}
            clicked={this.handleAddTaskClick}
            task={this.state.input}
          />
          <TaskList 
            task={this.state.task}
            changed={this.handleCheckedChange}
            deleted={this.handleDeleteTaskClicked}
            tab={this.state.activeTab}
            getStoredTask={this.getLocalStoredTask}
          /> 
          {this.state.activeTab === 'Completed' 
            ? <DeleteButton deleted={this.handleDeleteAllTask} />            
            : null
          }
      </div>
    );
  }
}

export default App;

