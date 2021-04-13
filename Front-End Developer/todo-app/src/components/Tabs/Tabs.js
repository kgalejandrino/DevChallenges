import React, { useState } from 'react';

import './Tabs.css';
// import Tab from './Tab/Tab';

const Tabs = () => {
    const list = [
        {'id': 0, 'tab': 'All' },
        {'id': 1, 'tab': 'Active' },
        {'id': 2, 'tab': 'Completed' }
    ];
    let [activeTab, setActiveTab] = useState(0);

    const getIndex = (idx) => {
        setActiveTab(idx);
    }

    return (
        <div className="Tabs">
            <ul className="ul-tabs">
                {list.map(list => {
                    return <li
                                className={list.id === activeTab && 'active'}
                                key={list.id}
                                onClick={() => getIndex(list.id)} >
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