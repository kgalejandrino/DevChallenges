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

    componentDidMount() { this.fetchRandomQuote(); }

    fetchRandomQuote = () => {
      this.setState({ 
        loading: true,
        renderMultipleQuotes: false
      })

      axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
      .then(response => {
        const data = response.data.data[0];
        this.setState({ 
          data: data,
          loading: false 
        })
      })  
      .catch(error => {
        alert(error);
      })
    }

    fetchMultipleQuotes = () => {
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
        alert(error);
      })
    }

    backToSingleQuoteClicked = () => this.setState({ renderMultipleQuotes: false })

  render() {
    let { data, multipleQuotes, renderMultipleQuotes, loading } = this.state;
    let render = null;
 
    if(renderMultipleQuotes) {
      render = multipleQuotes.map((data, index) => {
        return <Quote 
                  key={index} 
                  text={data.quoteText}
                  render={renderMultipleQuotes} 
                />
      })
    } else {
      render =
        <Aux>
          <Quote 
            text={data.quoteText}
          />
          <Author 
            author={data.quoteAuthor}
            genre={data.quoteGenre}
            clicked={this.fetchMultipleQuotes}
          />
        </Aux>
    }

    if(loading) { render = <Spinner /> }

    return (
      <div className="App">
        <div className="random-container">
          <span className="random-text">random</span>
          <span className="material-icons icon-random" onClick={this.fetchRandomQuote}>autorenew</span>
        </div>
          { render }
          { renderMultipleQuotes && !loading
            ? <span 
                className="material-icons md-48 icon-back"
                onClick={this.backToSingleQuoteClicked}>keyboard_backspace
                </span>
            : null
          }
      </div>
    )
  }
}

export default App;

