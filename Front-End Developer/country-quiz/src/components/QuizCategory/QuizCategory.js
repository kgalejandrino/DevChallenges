import React, { useState } from 'react';

import './QuizCategory.css';

const QuizCategory = (props) => {
    console.log(props.data);
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const [index, setIndex] = useState('');
    const [answerSelected, setAnswerSelected] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [choiceStatus, setChoiceStatus] = useState('')

    let listStyle = {};
    let renderIcon = null;

    const handleClickedAnswer = (answer, idx) => {
        if(props.category && props.region) {
            if(!answerSelected) {
                setIndex(idx);
                setAnswerSelected(true);
                if(answer === props.data.correct) {
                    setChoiceStatus('correct');
                    setCorrect(true);
                } else {
                    setChoiceStatus('wrong');
                }
            }
        } else {
            if(props.index === 0) {
                props.setCategory(answer);
            } else if(props.index === 1) {
                props.setRegion(answer);
            }
            setIndex(idx);
            setAnswerSelected(true);
            setCorrect(true);
            setChoiceStatus('correct');
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

    const choices = props.data.choices.map((ans, idx) => {
        return  <li className="list"
                    id={idx === index ? choiceStatus : null} 
                    key={idx} 
                    style={ choiceStatus === 'wrong' && ans === props.data.correct ? listStyle : null }
                    onClick={() => handleClickedAnswer(ans, idx)}>
                <div>
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
    
    const handleNextButton = () => {
        props.increment();
        setAnswerSelected(false);
        setCorrect(false);
        setChoiceStatus('')
    }

    return (
        <div className="QuizCard" style={!props.answerSelected ? {marginBottom: "12px"} : {marginBottom: "24px"}}>
            <h3>{props.data.question}</h3>
            <ul className="answer-card">
                {choices}
            </ul>
            { answerSelected 
                ? <div className="btn-container">
                    <button className="btn btn-next" onClick={handleNextButton}>Next</button>
                    </div>
                : null
            }
        </div>
    )
}

export default QuizCategory;