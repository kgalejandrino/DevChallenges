import React, { useState }from 'react';

import './ComponentStates.css';

const ComponentStates = (props) => {
    const [selected, setSelected] = useState(1);

    const getComponent = (id) => {
        setSelected(id);
        const component = props.list.forEach(item => {
            if(item.id === id) {
                if(item.type === 'btn-left--icon' || item.type === 'btn-right--icon') {
                    props.posClicked(item.type);
                    props.typeClicked('btn-icon');
                } else if(item.type === 'input-left--icon' || item.type === 'input-right--icon') {
                    props.posClicked(item.type);
                    props.typeClicked('input-icon');
                } else {
                    props.posClicked('');
                    props.typeClicked(item.type);
                }
            }
        });
        return component;
    }


    return (
        <ul className="ComponentStates">
            {props.list.map(component =>
                <li 
                    id={selected === component.id ? 'highlighted' : null}
                    key={component.id}
                    onClick={() => getComponent(component.id)}>
                    <span 
                        className="material-icons md-18 add-icon" 
                        style={{color: selected === component.id ? '#fff' : '#f7542e'}}>bookmark_border
                    </span>
                    {component.text}
                </li>
                
            )}
        </ul>
    )
}

export default ComponentStates;