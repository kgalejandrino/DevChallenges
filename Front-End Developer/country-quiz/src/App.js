import React, { Component } from 'react';

import './App.css';
import CountryQuiz from './container/CountryQuiz/CountryQuiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountryQuiz />
      </div>
    );
  }
}

export default App;
