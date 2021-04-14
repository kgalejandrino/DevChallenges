import React, { useState } from 'react';

import './TaskList.css';

const TaskList = (props) => {
    const completedStyle = { textDecoration: "line-through" };

    return (
        props.task.map((list, index) => {
            return <div className="TaskList" key={index}>
                <div>
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
                <div>
                    {props.tab === 'Completed' ? <span class="material-icons md-24 icon-delete">delete_outline</span> : null }
                </div>
            </div>
        })
    )
}

export default TaskList;