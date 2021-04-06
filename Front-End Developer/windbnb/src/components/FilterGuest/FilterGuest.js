import React, { useState } from 'react';

import './FilterGuest.css';
import Guest from './Guest/Guest';

const FilterGuest = (props) => {
    let [adultValue, setAdultValue] = useState(0);
    let [childrenValue, setChildrenValue] = useState(0);

    const changeAdultValue = (event) => {
        console.log('test');
        if(event.target.innerText === '+' && adultValue < 99) {
            setAdultValue(adultValue + 1);
        } else if(event.target.innerText === '-' && adultValue > 0) {
            setAdultValue(adultValue - 1);
        }
    }

    return (
        <div className="FilterGuest">
            <Guest 
                category="Adults"
                age="Ages 13 or above">
                <div className="inc-dec--btn">
                    <button className="btn btn-dec" onClick={changeAdultValue}>-</button>
                    <span className="value">{adultValue}</span>
                    <button className="btn btn-inc" onClick={changeAdultValue}>+</button>
                </div>
            </Guest>
            <Guest 
                category="Children"
                age="Ages 2-12">
                <div className="inc-dec--btn">
                    <button className="btn btn-dec">-</button>
                    <span className="value">{childrenValue}</span>
                    <button className="btn btn-inc">+</button>
                </div>
            </Guest>
        </div>
    )
}

export default FilterGuest;