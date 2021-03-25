import React from 'react';

import './ButtonStories.css';

const stories = [
    'Default Button',
    'Outline Button',
    'Text Button',
    'Left Icon Button',
    'Right Icon Button',
    'Primary Button',
    'Secondary Button', 
    'Danger Button'
];

const buttonStories = (props) => {
    return (
        <ul className="ButtonStories">
            {stories.map((link, idx) => <li key={idx}>{link}</li>)}
        </ul>
    )
}

export default buttonStories;