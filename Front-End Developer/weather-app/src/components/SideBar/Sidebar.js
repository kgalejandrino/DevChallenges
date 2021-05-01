import React from 'react';

import './Sidebar.css';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SearchBar from './SearchBar/SearchBar';

const sideBar = (props) => {
    return (
        <div className="Sidebar">
                { props.search
                    ? <SearchBar 
                        search={props.search}
                        searched={props.searched}
                        closed={props.closed} 
                        changed={props.changed}
                        filtered={props.filtered}
                        input={props.input}
                      /> 
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