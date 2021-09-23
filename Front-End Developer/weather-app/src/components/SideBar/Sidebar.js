import React from 'react';
import Radium from 'radium';

import './Sidebar.css';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SearchBar from './SearchBar/SearchBar';

const sideBar = (props) => {
    // let height = {}
    // if(!props.search) {
    //     height={
    //         '@media (max-width: 750px)': {
    //             height: "auto"
    //         }
    //     }
    // }
    return (
        <div className="Sidebar">
            <SearchBar 
                search={props.search}
                searched={props.searched}
                closed={props.closed} 
                changed={props.changed}
                filtered={props.filtered}
                input={props.input}
                getWeather={props.getWeather}
                error={props.error}
            /> 
            <CurrentWeather 
                clicked={props.clicked}
                data={props.data}
                location={props.location}
                tempScale={props.tempScale}
                request={props.request}
            />
        </div>
    )
}    
export default Radium(sideBar);