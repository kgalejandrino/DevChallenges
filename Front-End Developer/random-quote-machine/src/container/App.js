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
      this.setState({ 
        loading: true,
        renderMultipleQuotes: false
      })

      axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
      .then(response => {
        // console.log(response.data.data[0]);
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
        console.log(data);
        this.setState({ 
          multipleQuotes: [...data],
          loading: false 
        })
      })  
      .catch(error => {
        console.log(error);
      })
    }

    backToSingleQuoteClicked = () => this.setState({ renderMultipleQuotes: false })

  render() {
    let { data, multipleQuotes } = this.state;
    let render = null;
 
    if(this.state.renderMultipleQuotes) {
      render = multipleQuotes.map((data, index) => {
        return <Quote 
                  key={index} 
                  text={data.quoteText}
                  render={this.state.renderMultipleQuotes} 
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
            clicked={this.fetchListofQuotes}
          />
        </Aux>
    }

    if(this.state.loading) { render = <Spinner /> }

    console.log(this.state.multipleQuotes);
    return (
      <div className="App">
        <div className="random-container">
          <span className="random-text">random</span>
          <span className="material-icons icon-random" onClick={this.fetchRandomQuote}>autorenew</span>
        </div>
          { render }
          { this.state.renderMultipleQuotes && !this.state.loading
            ? <span 
                class="material-icons md-48 icon-back"
                onClick={this.backToSingleQuoteClicked}>keyboard_backspace
                </span>
            : null
          }
      </div>
    )
  }
}

export default App;

