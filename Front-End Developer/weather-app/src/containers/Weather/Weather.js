import React, { Component } from 'react';
import axios from 'axios';

import './Weather.css';
import Sidebar from '../../components/SideBar/Sidebar';
import Main from '../../components/Main/Main';
import { getCurrentPosition } from '../../Utils/Utils';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: false,
            data: [],
            location: 'Helsinki',
            input: '',
            woeid: 565346,
            activeScale: 'celsius',
            filteredSearch: [],
            error: false,
        }
    }

    componentDidMount() {
        /* Init data to render if user does not allow to know its location*/
        axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${this.state.woeid}/`)
        .then(response => {
            this.setState({ 
                data: response.data.consolidated_weather,
                location: response.data.title
            })
        })
        .catch(error => {
            console.log(error)
        })

        this.fetchCoordinates();
    }

    fetchCoordinates = async () => {
        try {
            const { coords } = await getCurrentPosition();
            const { latitude, longitude } = coords;
            this.fetchDataWithLongLat(latitude.toFixed(2), longitude.toFixed(2));
        } catch (error) {
            console.error(error);
        }
    }

    fetchDataWithLongLat = (lat, long) => {
        axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
        .then(response => {
            const data = response.data[0];
            return this.fetchDatawithWoeid(data.woeid);
        })
    }

    fetchDatawithWoeid = (id) => {
        axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${id}/`)
        .then(response => {
            this.setState({ 
                data: response.data.consolidated_weather,
                location: response.data.title
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleSearchOpenClicked = () => this.setState({ search: true })

    handleSearchClosedClicked = () => this.setState({ search: false })

    handleInputChange = (event) => this.setState({ input: event.target.value }) 

    handleSearchedClicked = () => {
        axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${this.state.input}`)
        .then(response => {
            if(response.data.length) {
                this.setState({ 
                    filteredSearch: [...response.data],
                    error: false
                });
            } else {
                this.setState({ error: true });
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleGetWeather = (id) => {
        this.setState({ search: false })
        this.fetchDatawithWoeid(id);
    }

    handleGetTempScale = (scale) => {
        if(scale) {
            this.setState({ activeScale: 'celsius' })
        } else {
            this.setState({ activeScale: 'farenheight' })
        }
    }

    handleRequestCurLocation = () => { this.fetchCoordinates() }

    render() {
        // console.log(this.state.filteredSearch);
        return (
            <div className="Weather">
                <Sidebar 
                    clicked={this.handleSearchOpenClicked}
                    closed={this.handleSearchClosedClicked}
                    searched={this.handleSearchedClicked}
                    input={this.state.input}
                    data={this.state.data[0]}
                    location={this.state.location}
                    search={this.state.search}
                    changed={this.handleInputChange}
                    filtered={this.state.filteredSearch}
                    error={this.state.error}
                    getWeather={this.handleGetWeather}
                    tempScale={this.state.activeScale}
                    request={this.handleRequestCurLocation}
                />
                <Main 
                    data={this.state.data}
                    highlights={this.state.data[0]}
                    getScale={this.handleGetTempScale}
                    tempScale={this.state.activeScale}
                />
            </div>
        )
    }
}

export default Weather;