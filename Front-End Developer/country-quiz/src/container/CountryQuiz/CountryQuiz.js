import React, { Component } from 'react';

import './CountryQuiz.css';
import QuizCategory from '../../components/QuizCategory/QuizCategory';
import Results from '../../components/Results/Results'; 
import { getQuestion, options } from '../../utils/Utils';
import Aux from '../../hoc/Auxilliary';

class CountryQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            index: 10,
            score: 4,
            category: '',
            region: ''
        }
    }

    componentDidMount() {
        this.setState({ data: options})
    }

    handleIncrementIndex = () => {
        if(this.state.region && this.state.data.length === 2) {
            this.setState({ index: -1 });

            const fetchData = async () => {
                const { category, region } = this.state;
                const data = await getQuestion(category, region);
                this.setState({ data: data})
            }

            fetchData();
        }


        this.setState(prevState => ({
            index: prevState.index + 1
        }))
    }

    setScore = () => this.setState(prevState => ({ score: prevState.score + 1 }));

    setCategory = (answer) => this.setState({ category: answer}) 
    
    setRegion = (answer) => this.setState({ region: answer}) 

    handleRestartClicked = () => {
        this.setState({ 
            data: options,
            index: 0
        })
    }

    render() {   
        const renderQuestions =  (
        <Aux>
            <img src="https://raw.githubusercontent.com/kgalejandrino/DevChallenges/4350fd304d74e0a2f78f4ac99324d6f4ff29d1c8/Front-End%20Developer/country-quiz/src/assets/undraw_adventure_4hum%201.svg" alt="undraw_adventure" className="img-quiz"></img>
            { this.state.data.length
            ? <QuizCategory 
                data={this.state.data[this.state.index]}
                category={this.state.category}
                region={this.state.region}
                index={this.state.index}
                increment={this.handleIncrementIndex}
                setCategory={this.setCategory}
                setRegion={this.setRegion}
                setScore={this.setScore}
            />
            : null
            }
            </Aux>
        );
        return (
            <div className="CountryQuiz">
                <h2>Country Quiz</h2>
                <div className="quiz-card">
                { this.state.index < 9
                    ? renderQuestions
                    : <Results 
                        score={this.state.score}
                        restart={this.handleRestartClicked}
                      />
                }
                </div>
            </div>
        )
    }
    
}

export default CountryQuiz;