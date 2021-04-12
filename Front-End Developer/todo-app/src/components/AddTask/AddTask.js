import React from 'react';

import './AddTask.css';

const addTask = () => {
    return (
        <div className="AddTask">
            <input className="task-input" type="text" placeholder="add details"></input>
            <button className="add-btn">Add</button>
        </div>
    )
}

export default addTask;