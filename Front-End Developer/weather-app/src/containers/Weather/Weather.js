import React, { Component } from 'react';
import axios from 'axios';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import SearchBar from '../../components/SearchBar/SearchBar';
import Main from '../../components/Main/Main';
import { getCurrentPosition } from '../../Utils/Utils';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: false,
            woeid: '',
            data: [],
            location: 'Helsinki'
        }
    }

    componentDidMount() {
        const fetchCoordinates = async () => {
            try {
                const { coords } = await getCurrentPosition();
                const { latitude, longitude } = coords;
                this.fetchDataWithLongLat(latitude.toFixed(2), longitude.toFixed(2));
            } catch (error) {
                console.error(error);
            }
        };

        fetchCoordinates();
    }

    fetchDataWithLongLat = (lat, long) => {
        axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
        .then(response => {
            const data = response.data[0];
            return axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${data.woeid}/`)
        })
        .then(response => {
            console.log(response.data);
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

    render() {
        return (
            <div className="Weather">
                { this.state.search
                    ? <SearchBar searched={this.handleSearchClosedClicked} search={this.state.search}/> 
                    : null
                }
                <CurrentWeather 
                    searched={this.handleSearchOpenClicked}
                    weather={this.state.data[0]}
                    location={this.state.location}
                />
                <Main 
                    data={this.state.data}
                    highlights={this.state.data[0]}
                />
            </div>
        )
    }
}

export default Weather;