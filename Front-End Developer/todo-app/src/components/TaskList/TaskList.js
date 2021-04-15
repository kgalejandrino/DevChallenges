import React, { useEffect, useState } from 'react';

import './TaskList.css';

const TaskList = (props) => {
    let [task, setTask] = useState([]);
    const completedStyle = { textDecoration: "line-through" };

    useEffect(() => {
        setTask(props.task);
    }, [props.task]);

    useEffect(() => {
        const saveTask = localStorage.getItem("task");
        if(saveTask) {
            props.getStoredTask(JSON.parse(saveTask));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task));
    })
    
    console.log(task);
    return (
        task.map((list, index) => {
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
                    {props.tab === 'Completed' 
                        ? <span 
                            className="material-icons md-24 icon-delete"
                            onClick={props.deleted}>delete_outline
                          </span> 
                        : null 
                    }
                </div>
            </div>
        })
    )
}

export default TaskList;