import React from 'react';

import './TaskList.css';

const taskList = () => {
    return (
        <div className="TaskList">
            <input type="checkbox" id="task" className="list-checkbox"></input>
            <label for="task" className="label-checkbox">Do coding challenges</label>
        </div>
    )
}

export default taskList;