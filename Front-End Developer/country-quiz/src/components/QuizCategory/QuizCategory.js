import React, { useState } from 'react';

import './QuizCategory.css';
import Aux from '../../hoc/Auxilliary';

const QuizCategory = (props) => {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const [index, setIndex] = useState('');
    const [answerSelected, setAnswerSelected] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [choiceStatus, setChoiceStatus] = useState('');

    let listStyle = {};
    let renderIcon = null;


    const handleClickedAnswer = (answer, idx) => {
        // Checks if the data passed is for the quiz
        // then checks if answer selected is correct/wrong
        if(props.data.correct) {
            if(!answerSelected) {
                setIndex(idx);
                setAnswerSelected(true);
                if(answer === props.data.correct) {
                    setChoiceStatus('correct');
                    setCorrect(true);
                    props.setScore();
                } else {
                    setChoiceStatus('wrong');
                }
            }
        // else user selects the quiz type & region
        } else {
            setIndex(idx);
            setAnswerSelected(true);
            setCorrect(true);
            setChoiceStatus('correct');
            if(props.index === 0) {
                props.setCategory(answer);
            } else if(props.index === 1) {
                props.setRegion(answer);
            }
        }
    }

    if(answerSelected) {
        if(correct) {
            renderIcon = <span className="material-icons">check_circle_outline</span>;
        } else {
            renderIcon = <span className="material-icons">cancel</span>;
            listStyle = { 
                border: "2px solid #60BF88",
                backgroundColor: "#60BF88",
                color: "#fff"
            }
        }
    } 

    const handleNextButton = () => {
        props.increment();
        setAnswerSelected(false);
        setCorrect(false);
        setChoiceStatus('');
    }

    const renderChoices = props.data.choices.map((ans, idx) => {
        return  <li className="list"
                    id={idx === index ? choiceStatus : null} 
                    key={idx} 
                    style={ choiceStatus === 'wrong' && ans === props.data.correct ? listStyle : null}
                    onClick={() => handleClickedAnswer(ans, idx)}>
                <div className="choices">
                    <span className="letters">{letters[idx]}</span>
                    <span className="answers">{ans}</span>
                </div>
                { idx === index ? renderIcon : null}
                { choiceStatus === 'wrong' && ans === props.data.correct 
                    ? <span className="material-icons">check_circle_outline</span>
                    : null 
                }
               </li>
        });
    
    const renderTracker = (
        props.data.correct
        ? <div className="question-tracker">{props.index + 1}/10</div>
        : null
    );

    return (
        <div className="QuizCard" style={!props.answerSelected ? {marginBottom: "12px"} : {marginBottom: "24px"}}>
            { props.data.url
                ? <img src={props.data.url} alt="flag" className="img-flag"></img>
                : null
            }
            <h3>{props.data.question}</h3>
            <ul className="answer-card">
                {renderChoices}
            </ul>
            { answerSelected 
                ? <Aux>
                    { renderTracker }
                    <button className="btn btn-next" onClick={handleNextButton}>Next</button>
                  </Aux>
                : null
            }
        </div>
    )
}

export default QuizCategory;