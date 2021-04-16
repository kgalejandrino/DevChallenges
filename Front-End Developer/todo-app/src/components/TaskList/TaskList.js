import React, { useEffect, useState } from 'react';

import './TaskList.css';

const TaskList = (props) => {
    let [task, setTask] = useState([]);
    const { getStoredTask } = props;
    
    useEffect(() => {
        setTask(props.task); 
        let filter = props.task;
        if(props.tab === 'Active') {
            filter = filter.filter(task => !task.completed);
            setTask(filter);
        } else if(props.tab === 'Completed') {
            filter = filter.filter(task => task.completed);
            setTask(filter);
        } 
    }, [props.tab, props.task ]);

    useEffect(() => {
        const saveTask = localStorage.getItem("task");
        if(saveTask) {
            getStoredTask(JSON.parse(saveTask));
        }
    }, [getStoredTask])

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(props.task));
    })
    
    const completedStyle = { textDecoration: "line-through" };
    
    return (
        task.map((list, index) => {
            return <div className="TaskList" key={index}>
                <div>
                    <input 
                        type="checkbox" 
                        id="task"
                        className="list-checkbox"
                        checked={list.completed}
                        onChange={(e) => props.changed(e, list.id)}>
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