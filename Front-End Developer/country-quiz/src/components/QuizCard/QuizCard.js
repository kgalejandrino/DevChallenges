import React, { useState } from 'react';

import './QuizCard.css';

const region = ['Africa', 'Americas', 'Asia', 'Europe', 'Ocenia'];
const category = ['Capital', 'Flag'];

const QuizCard = (props) => {
    let [index, setIndex] = useState(-1);
    // let [categorySelected, setCategorySelected] = useState(false);
    
    const getRegionSelected = (i) => {
        setIndex(i);
        props.answerClicked(true);
    }

    const styles = {
        li: {
            border: "2px solid #60BF88",
            backgroundColor: "#60BF88",
            color: "#fff"
        }
    }

    let renderData = [...category];
    let categorySelected = false;

    if(props.next) {
        categorySelected = true;
        renderData = [...region];
    }

    return (
        <div className="QuizCard">
            <h3>Select {categorySelected ? 'Region' : 'Category'}</h3>
            <ul>
                {renderData.map((name, idx) => {
                    return <div 
                                key={idx} 
                                className="list-card"
                                style={index === idx && !props.next ? styles.li : null}
                                onClick={() => getRegionSelected(idx)}>
                            <li>{name}</li>
                            {index === idx && !props.next 
                                    ? <span className="material-icons">check_circle_outline</span>
                                    : null
                            }
                            </div>
                })}
            </ul>
        </div>
    )
}

export default QuizCard;