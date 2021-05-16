import React from 'react';

import './Results.css';

const results = (props) => {
    return (
        <div className="results_box">
            <img src="https://raw.githubusercontent.com/kgalejandrino/DevChallenges/e46b79f3f105b5f68f63fe535b13baa0e46dcaec/Front-End%20Developer/country-quiz/src/assets/undraw_winners_ao2o%202.svg" alt="winner-trophy" className="img-results"></img>
            <h1>Results</h1>
            <p>You got <span className="score">{props.score}</span> correct answers</p>
            <button className="btn btn-try" onClick={props.restart}>Try Again</button>
        </div>
    )
}

export default results;