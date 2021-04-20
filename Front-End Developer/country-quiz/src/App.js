import React, { Component } from 'react';

import './App.css';
import CountryQuiz from './components/CountryQuiz/CountryQuiz';

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
