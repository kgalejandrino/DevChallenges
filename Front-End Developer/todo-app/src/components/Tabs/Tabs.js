import React, { useState } from 'react';

import './Tabs.css';

const Tabs = (props) => {
    const list = [
        {'id': 0, 'tab': 'All' },
        {'id': 1, 'tab': 'Active' },
        {'id': 2, 'tab': 'Completed' }
    ];

    let [activeTab, setActiveTab] = useState(0);

    const getIndex = (idx) => { 
        setActiveTab(idx);
        props.active(list[idx].tab);
    }

    return (
        <div className="Tabs">
            <ul className="ul-tabs">
                {list.map((list, i) => {
                    return <li
                                className={list.id === activeTab ? 'active' : null}
                                key={list.id}
                                onClick={() => getIndex(i)} >
                                {list.tab}   
                            </li>
                    })
                }
            </ul>
            <div className="underline"></div>
        </div>
    )
}

export default Tabs;