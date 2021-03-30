import React, { useState }from 'react';

import './ComponentStates.css';

const ComponentStates = (props) => {
    const [selected, setSelected] = useState(1);

    const showButton = (id) => {
        setSelected(id);
        const story = props.list.forEach(item => {
            if(item.id === id) {
                if(item.type === 'left-icon' || item.type === 'right-icon') {
                    props.posClicked(item.type);
                    props.typeClicked('icon-btn');
                } else {
                    props.posClicked('');
                    props.typeClicked(item.type);
                }
            }
        });
        return story;
    }


    return (
        <ul className="ComponentStates">
            {props.list.map(story =>
                <li 
                    id={selected === story.id ? 'highlighted' : null}
                    key={story.id}
                    onClick={() => showButton(story.id)}>
                    <span 
                        className="material-icons md-18 add-icon" 
                        style={{color: selected === story.id ? '#fff' : '#f7542e'}}>bookmark_border
                    </span>
                    {story.text}
                </li>
                
            )}
        </ul>
    )
}

export default ComponentStates;