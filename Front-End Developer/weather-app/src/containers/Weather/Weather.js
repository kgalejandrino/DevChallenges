import React, { Component } from 'react';
import axios from 'axios';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            woeid: ''
        }
    }

    componentDidMount() {
        const getLocation = () => new Promise ((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(pos => {
                const location = {
                    lat: pos.coords.latitude.toFixed(2),
                    long: pos.coords.longitude.toFixed(2)
                };
                resolve(location);
            },
            error => reject(error)
            );
            }
        );
        getLocation()
        .then(location => {
            let long = location.long;
            let lat = location.lat;
            console.log(long, lat);
            this.fetchDataWithLongLat(lat, long);
        })
        .catch(error => {
            console.log(error);
        });
    }

    fetchDataWithLongLat = (lat, long) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
        .then(response => {
            console.log(response.data[0])
            const data = response.data[0];
            this.setState({ woeid: data.woeid })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="Weather">
                <CurrentWeather />
            </div>
        )
    }
}

export default Weather;