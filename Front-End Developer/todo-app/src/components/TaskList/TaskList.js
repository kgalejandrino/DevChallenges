import React, { useState } from 'react';

import './TaskList.css';

const TaskList = (props) => {
    const completedStyle = { textDecoration: "line-through" };

    return (
        props.task.map((list, index) => {
            return <div className="TaskList" key={index}>
                <input 
                    type="checkbox" 
                    id="task"
                    className="list-checkbox"
                    checked={list.completed}
                    onChange={(e) => props.changed(e, index)}>
                </input>
                <label 
                    htmlFor="task" 
                    className="label-checkbox"
                    style={list.completed ? completedStyle : null}>{list.task}
                </label>
            </div>
        })
    )
}

export default TaskList;