import React, { Component } from 'react';
import axios from 'axios';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import SearchBar from '../../components/SearchBar/SearchBar';
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
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
        .then(response => {
            const data = response.data[0];
            return axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${data.woeid}/`)
        })
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

    render() {
        console.log(this.state.data[0]);
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
            </div>
        )
    }
}

export default Weather;