import React, { Component } from 'react';
import axios from 'axios';

import './CountryQuiz.css';
import QuizCard from '../../components/QuizCard/QuizCard';

class CountryQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answerSelected: false,
            nextSelected: false,
        }
    }

    handleAnswerClicked = (bool) => {
        this.setState({ 
            answerSelected: bool, 
            nextSelected: false
        })
    }

    handleNextClicked = () => {
        this.setState({ 
            nextSelected: true,
            answerSelected: false
        })
    }

    render() {
        return (
            <div className="CountryQuiz">
                <h2>Country Quiz</h2>
                <div className="quiz-card">
                    <img src="https://raw.githubusercontent.com/kgalejandrino/DevChallenges/4350fd304d74e0a2f78f4ac99324d6f4ff29d1c8/Front-End%20Developer/country-quiz/src/assets/undraw_adventure_4hum%201.svg" alt="undraw_adventure" className="img-quiz"></img>
                    <QuizCard 
                        answerClicked={this.handleAnswerClicked}
                        next={this.state.nextSelected}
                        setNext={this.handleNextClicked}
                    />
                    { this.state.answerSelected 
                        ? <div className="btn-container" onClick={this.handleNextClicked}>
                            <button className="btn btn-next">Next</button>
                          </div>
                        : null
                    }
                </div>
            </div>
        )
    }
    
}

export default CountryQuiz;