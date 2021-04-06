import React from 'react';

import './FilterGuest.css';
import Guest from './Guest/Guest';

const filterGuest = (props) => {
    return (
        <div className="FilterGuest">
            <Guest 
                category="Adults"
                age="Ages 13 or above"
            />
            <Guest 
                category="Children"
                age="Ages 2-12"
            />
        </div>
    )
}

export default filterGuest;