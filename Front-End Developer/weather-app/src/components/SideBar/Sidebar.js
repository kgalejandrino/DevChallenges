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
                        getWeather={props.getWeather}
                      /> 
                    : <CurrentWeather 
                        clicked={props.clicked}
                        data={props.data}
                        location={props.location}
                        tempScale={props.tempScale}
                      />
                }
        </div>
    )
}    
export default sideBar;