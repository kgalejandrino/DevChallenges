import React, { useState } from 'react';

import './QuizCategory.css';

const options = [
    { 'question': 'Select Category', 'answers': ['Capital', 'Flag'] },
    { 'question': 'Select Region', 'answers': ['Africa', 'Americas', 'Asia', 'Europe', 'Ocenia']}
];

const QuizCategory = (props) => {
    let[count, setCount] = useState(0);
    let[index, setIndex] = useState(-1);
    let[answerSelected, setAnswerSelected] = useState(false);

    const handleAnswerClicked = (i) => {
        setIndex(i);
        setAnswerSelected(true);
    }

    const handleNextClicked = () => {
        if(count === 0) {
            props.category(options[count].answers[index]);
        } else if(count === 1) {
            props.region(options[count].answers[index]);
        }

        if(count < 1) {
            setCount(count + 1);
            setAnswerSelected(false);
        }
    }

    const styles = {
        li: {
            border: "2px solid #60BF88",
            backgroundColor: "#60BF88",
            color: "#fff"
        }
    }

    return (
        <div className="QuizCard">
            <h3>{options[count].question}</h3>
            <ul>
                {options[count].answers.map((name, idx) => {
                    return <div 
                                key={idx} 
                                className="list-card"
                                style={index === idx && answerSelected ? styles.li : null}
                                onClick={() => handleAnswerClicked(idx)}>
                            <li>{name}</li>
                            {index === idx && answerSelected
                                    ? <span className="material-icons">check_circle_outline</span>
                                    : null
                            }
                        </div>
                })}
            </ul>
            { answerSelected 
                ? <div className="btn-container">
                    <button className="btn btn-next" onClick={handleNextClicked}>Next</button>
                    </div>
                : null
            }
        </div>
    )
}

export default QuizCategory;