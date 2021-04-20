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
            border: "2px solid #60BF88",
            backgroundColor: "#60BF88",
            color: "#fff"
        }
    }

    return (
        <div className="Region">
            <h3>Select Region</h3>
            <ul>
                {data.map((name, idx) => {
                    return <div 
                                key={idx} 
                                className="list-card"
                                style={index === idx ? styles.li : null}
                                onClick={() => getRegionSelected(idx)}>
                            <li>{name}</li>
                            {index === idx 
                                    ? <span className="material-icons">check_circle_outline</span>
                                    : null
                            }
                            </div>
                })}
            </ul>
        </div>
    )
}

export default Region;