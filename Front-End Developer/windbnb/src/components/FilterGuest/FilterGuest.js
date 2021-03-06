import React, { useEffect, useRef, useState } from 'react';
import Radium from 'radium';

import './FilterGuest.css';
import Guest from './Guest/Guest';

const FilterGuest = (props) => {
    let [adultValue, setAdultValue] = useState(props.adultVal);
    let [childrenValue, setChildrenValue] = useState(props.childVal);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if(ref.current && !ref.current.contains(event.target)) {
            event.preventDefault();
            props.hideFilterGuest(false);
            props.total((adultValue + childrenValue));
            props.getAdultValue(adultValue);
            props.getChildrenValue(childrenValue);
        }
    }
    // console.log(adultValue);
    // console.log(childrenValue);
    console.log(adultValue+childrenValue);
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    const changeAdultValue = (event) => {
        if(event.target.innerText === '+' && adultValue < 99) {
            setAdultValue(adultValue + 1);
        } else if(event.target.innerText === '-' && adultValue > 0) {
            setAdultValue(adultValue - 1);
        }
    }

    const changeChildrenValue = (event) => {
        if(event.target.innerText === '+' && childrenValue < 99) {
            setChildrenValue(childrenValue + 1);
        } else if(event.target.innerText === '-' && childrenValue > 0) {
            setChildrenValue(childrenValue - 1);
        }
    }

    const styles = {
        filterGuest: {
            '@media (max-width: 770px)': {
                marginLeft: "0",
                paddingLeft: "18px"
            }   
        }
      }

    return (
        <div className="FilterGuest" ref={ref} style={props.showDrawer ? styles.filterGuest : null}>
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
                    <button className="btn btn-dec" onClick={changeChildrenValue}>-</button>
                    <span className="value">{childrenValue}</span>
                    <button className="btn btn-inc" onClick={changeChildrenValue}>+</button>
                </div>
            </Guest>
        </div>
    )
}

export default Radium(FilterGuest);