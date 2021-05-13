import React from 'react';
import { getQuestion } from '../../utils/Utils';

import './QuizCategory.css';

// const options = [
//     { 'question': 'Select Category', 'answers': ['Capital', 'Flag'] },
//     { 'question': 'Select Region', 'answers': ['Africa', 'Americas', 'Asia', 'Europe', 'Ocenia']}
// ];

const quizCategory = (props) => {
    const data = getQuestion(props.data);

    console.log(data.choices);
    // const styles = {
    //     li: {
    //         border: "2px solid #60BF88",
    //         backgroundColor: "#60BF88",
    //         color: "#fff"
    //     }
    // }

    return (
        <div className="QuizCard">
            <h3>{data.question}</h3>
            <ul className="answer-card">
                {data.choices.map((item, index) => {
                    return <li key={index}>
                        {item}
                    </li>
                })}
                {/* <span className="material-icons">check_circle_outline</span> */}
            </ul>
            {/* { answerSelected 
                ? <div className="btn-container">
                    <button className="btn btn-next" onClick={handleNextClicked}>Next</button>
                    </div>
                : null
            } */}
        </div>
    )
}

export default quizCategory;