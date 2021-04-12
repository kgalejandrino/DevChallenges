import React from 'react';

import './AddTask.css';

const addTask = () => {
    return (
        <div className="AddTask">
            <input className="input-task" type="text" placeholder="add details"></input>
            <button className="btn-task">Add</button>
        </div>
    )
}

export default addTask;