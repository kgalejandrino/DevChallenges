import React, { Component } from 'react';
import axios from 'axios';

import './CountryQuiz.css';
import QuizCategory from '../../components/QuizCategory/QuizCategory';

class CountryQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/region/asia?fields=name;capital`)
        .then(response => {
            this.setState({ data: response.data });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {


        return (
            <div className="CountryQuiz">
                <h2>Country Quiz</h2>
                <div className="quiz-card">
                    <img src="https://raw.githubusercontent.com/kgalejandrino/DevChallenges/4350fd304d74e0a2f78f4ac99324d6f4ff29d1c8/Front-End%20Developer/country-quiz/src/assets/undraw_adventure_4hum%201.svg" alt="undraw_adventure" className="img-quiz"></img>
                    <QuizCategory 
                        data={this.state.data}
                    />
                </div>
            </div>
        )
    }
    
}

export default CountryQuiz;