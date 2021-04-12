import React from 'react';

import './AddTask.css';

const addTask = () => {
    return (
        <div className="AddTask">
            <input type="text" placeholder="add details"></input>
            <button>Add</button>
        </div>
    )
}

export default addTask;