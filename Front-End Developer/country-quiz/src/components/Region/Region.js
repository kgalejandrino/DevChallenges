import React, { useState } from 'react';

import './Region.css';

const data = ['Africa', 'Americas', 'Asia', 'Europe', 'Ocenia'];

const Region = (props) => {
    let [regionName, setRegionName] = useState('');
    let [index, setIndex] = useState(-1);
    
    const getRegionSelected = (i) => {
        setRegionName(data[i]);
        setIndex(i);
    }

    const styles = {
        li: {
            border: "2px solid #F9A826",
            backgroundColor: "#F9A826",
            color: "#fff"
        }
    }

    return (
        <div className="Region">
            <h3>Select Region</h3>
            <ul>
                {data.map((name, idx) => {
                    return <li 
                                key={idx} 
                                style={index === idx ? styles.li : null}
                                onClick={() => getRegionSelected(idx)}>{name}
                            </li>
                })}
            </ul>
        </div>
    )
}

export default Region;