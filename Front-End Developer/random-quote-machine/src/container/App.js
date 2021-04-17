import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Aux from '../hoc/Auxilliary';
import Quote from '../components/Quote/Quote';
import Author from '../components/Author/Author';
import Spinner from '../components/UI/Spinner/Spinner';

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        data: [],
        loading: false
      }
    }

    componentDidMount() {
      this.fetchRandomQuote();
    }

    fetchRandomQuote = () => {
      this.setState({ loading: true })
      axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
      .then(response => {
        console.log(response.data.data[0]);
        const data = response.data.data[0];
        this.setState({ 
          data: data,
          loading: false 
        })
      })  
      .catch(error => {
        console.log(error);
      })
    }

  render() {
    let { data } = this.state;
    let quote = 
      (
        <Aux>
          <Quote 
            text={data.quoteText}
          />
          <Author 
            author={data.quoteAuthor}
            genre={data.quoteGenre}
          />
        </Aux>
      )
    
    if(this.state.loading) { quote = <Spinner /> }
    
    return (
      <div className="App">
        <div className="random-container">
          <span className="random-text">random</span>
          <span className="material-icons icon-random" onClick={this.fetchRandomQuote}>autorenew</span>
        </div>
          { quote }
      </div>
    )
  }
}

export default App;

