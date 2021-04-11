import React from 'react';

import './Tabs.css';
import Tab from './Tab/Tab';

const tabs = () => {
    const list = ['All', 'Active', 'Completed'];

    return (
        <div className="Tabs">
            <ul className="ul-tabs">
                {list.map((nav, index) => {
                    return <Tab
                            key={index}>
                            {nav}    
                    </Tab>
                    })
                }
            </ul>
            <div className="underline"></div>
        </div>
    )
}

export default tabs;