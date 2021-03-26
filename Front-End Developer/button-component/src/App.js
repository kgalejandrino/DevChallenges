import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Buttons from './components/Buttons/Buttons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typeSelected: '',
      iconPosition: '',
      showButton: false
    }
  }

  getTypeSelected = (type) => {
    this.setState({ typeSelected: type })
  }

  getIconPosition = (pos) => {
    this.setState({ iconPosition: pos })
  }

  render() {
    return (
      <div className="App">
        <Sidebar 
          typeSelected={this.getTypeSelected}
          positionSelected={this.getIconPosition}
        />
        <Buttons 
          btnStyle={this.state.typeSelected}
          position={this.state.iconPosition}
          show={this.state.showButton}
        />
      </div>
    );
  }
}

export default App;

// font-family: 'Noto Sans JP', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Ubuntu Mono', monospace;