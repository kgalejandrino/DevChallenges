import React from 'react';

import './Sidebar.css';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SearchBar from './SearchBar/SearchBar';

const sideBar = (props) => {
    return (
        <div className="Sidebar">
                { props.search
                    ? <SearchBar closed={props.closed} search={props.search}/> 
                    : <CurrentWeather 
                        clicked={props.clicked}
                        data={props.data}
                        location={props.location}
                      />
                }
        </div>
    )
}    
export default sideBar;