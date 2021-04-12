import React, { useState } from 'react';

import './TaskList.css';

const TaskList = (props) => {
    let [check, setCheck] = useState(false);
    const handleCheckboxClick = () => setCheck(true);

    const strikethrough = { 
        textDecoration: "line-through",
        color: "#333"
    }

    return (
        <div className="TaskList">
            <input 
                type="checkbox" 
                id="task" 
                className="list-checkbox"
                onClick={handleCheckboxClick}>
            </input>
            <label 
                htmlFor="task" 
                className="label-checkbox"
                style={check ? strikethrough : null}>{props.children}
            </label>
        </div>
    )
}

export default TaskList;