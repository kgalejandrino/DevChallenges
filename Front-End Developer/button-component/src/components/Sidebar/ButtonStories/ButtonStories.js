import React, { useState }from 'react';

import './ButtonStories.css';

const list = [
    { id: 1, type: 'default', text: 'Default Button' },
    { id: 2, type: 'outline', text: 'Outline Button' },
    { id: 3, type: 'text', text: 'Text Button'},
    { id: 4, type: 'left-icon', text: 'Left Icon Button'},
    { id: 5, type: 'right-icon', text: 'Right Icon Button'},
    { id: 6, type: 'primary', text: 'Primary Button' },
    { id: 7, type: 'secondary', text: 'Secondary Button'}, 
    { id: 8, type: 'danger', text: 'Danger Button' }
];

const ButtonStories = (props) => {
    const [stories, setStories] = useState(list);
    const [selected, setSelected] = useState('');

    const showButton = (id) => {
        setSelected(id);
        const story = list.filter(item => {
            if(item.id === id) {
                if(item.type === 'left-icon' || item.type === 'right-icon') {
                    props.positionSelected(item.type);
                    props.typeSelected('default-icon');
                } else {
                    props.positionSelected('');
                    props.typeSelected(item.type);
                }
            }
        });
        return story;
    }


    return (
        <ul className="ButtonStories">
            {stories.map(story =>
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

export default ButtonStories;