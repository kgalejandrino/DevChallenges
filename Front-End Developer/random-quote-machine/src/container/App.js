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
        loading: false,
        multipleQuotes: [],
        renderMultipleQuotes: false
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

    fetchListofQuotes = () => {
      const author = this.state.data.quoteAuthor;
      this.setState({ 
        loading: true,
        renderMultipleQuotes: true
      })
      axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=3`)
      .then(response => {
        const data = response.data.data;
        this.setState({ 
          multipleQuotes: [...data],
          loading: false 
        })
      })  
      .catch(error => {
        console.log(error);
      })
    }

  render() {
    let { data, multipleQuotes } = this.state;
    let render = null;
    let quote = (
        <Aux>
          <Quote 
            text={data.quoteText}
          />
          <Author 
            author={data.quoteAuthor}
            genre={data.quoteGenre}
            clicked={this.fetchListofQuotes}
          />
        </Aux>
    );

    let quotes = multipleQuotes.map((data, index) => {
      return <Quote 
                key={index} 
                text={data.quoteText}
                render={this.state.renderMultipleQuotes} 
              />
    })

    if(this.state.loading) { quote = <Spinner /> }

    if(this.state.renderMultipleQuotes) {
      render = quotes;
    } else {
      render = quote;
    }

    console.log(this.state.multipleQuotes);
    return (
      <div className="App">
        <div className="random-container">
          <span className="random-text">random</span>
          <span className="material-icons icon-random" onClick={this.fetchRandomQuote}>autorenew</span>
        </div>
          { render }
      </div>
    )
  }
}

export default App;

