import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Quote from './components/Quote/Quote';
import Author from './components/Author/Author';

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        author: '',
        genre: '',
        text: ''
      }
    }

    componentDidMount() {
      axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
        .then(response => {
          console.log(response.data.data[0]);
          const data = response.data.data[0];
          this.setState({
            author: data.quoteAuthor,
            genre: data.quoteGenre,
            text: data.quoteText
          })
        })  
        .catch(error => {
          console.log(error);
        })
    }

  render() {
    console.log(this.state.text);
    return (
      <div className="App">
        <div className="random-container">
          <span>random</span>
          <span className="material-icons">autorenew</span>
        </div>
        <Quote 
          text={this.state.text}
        />
        <Author 
          author={this.state.author}
          genre={this.state.genre}
        />
      </div>
    )
  }
}

export default App;

