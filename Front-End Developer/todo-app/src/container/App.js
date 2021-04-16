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
      uniqueID: 0,
      activeTab: 'All',
      filteredTask: []
    }
  }

  componentDidMount = () => { 
    document.addEventListener("keydown", this.handleAddTaskPress);
  }

  componentWillUnmount = () => document.addEventListener("keydown", this.handleAddTaskPress);
  
  handleInputChange = (event) => this.setState({ input: event.target.value });

  handleAddTaskPress = event => {
    if(event.keyCode === 13) {
      this.setState(prevState => ({ uniqueID: prevState.uniqueID + 1}));
      if(this.state.input) {
        this.setState(prevState => ({
          task: [...prevState.task, { id: this.state.uniqueID, task: this.state.input, completed: false} ]
        }))
      }
      this.setState({ input: ''})
    }
  }

  handleAddTaskClick = () => {
    this.setState(prevState => ({ uniqueID: prevState.uniqueID + 1}));

    if(this.state.input) {
      this.setState(prevState => ({
          task: [...prevState.task, { id: this.state.uniqueID, task: this.state.input, completed: false} ]
      }))
    }
    
    this.setState({ input: ''})
  }

  getActiveTab = (tab) => this.setState({ activeTab: tab});

  handleCheckedChange = (event, id) => {
    let temp = [...this.state.task];

    temp.forEach((data) => {
      if(data.id === id) {
        data.completed = event.target.checked;
      }
    })
    
    this.setState({ task: temp });
  }

  handleDeleteTaskClicked = (id) => {
    let temp = [...this.state.task];
    let index = 0;
    temp.forEach((data, i) => {
      if(data.id === id) {
        index = i;
      }
    })
    temp.splice(index, 1);
    this.setState({ task: temp });
  }

  handleDeleteAllTask = () => {
    let temp = [...this.state.task];

    temp = temp.filter(task => !task.completed)

    this.setState({ task: temp })
  }

  getLocalStoredTask = (data) => {
    let length = data.length - 1;
    this.setState({ 
      task: data,  
      uniqueID: data.length ? data[length].id : 0
    })
  }

  getFilteredTask = (data) => this.setState({ filteredTask: data })

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
            getFilteredTask={this.getFilteredTask}
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

