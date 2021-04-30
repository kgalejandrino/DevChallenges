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
            searchedLocation: []
        }
    }

    componentDidMount() {
        /* Init data to render */
        axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/565346/`)
        .then(response => {
            this.setState({ 
                data: response.data.consolidated_weather,
                location: response.data.title
            })
        })
        .catch(error => {
            console.log(error)
        })

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

    handleInputChange = (event) => this.setState({ input: event.target.value }) 

    handleSearchedClicked = () => {
        // console.log(this.state.input);
        axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${this.state.input}`)
        .then(response => {
            // console.log(response.data);
            this.setState({ searchedLocation: [...response.data]});
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log(this.state.searchedLocation);
        return (
            <div className="Weather">
                <Sidebar 
                    clicked={this.handleSearchOpenClicked}
                    closed={this.handleSearchClosedClicked}
                    searched={this.handleSearchedClicked}
                    data={this.state.data[0]}
                    location={this.state.location}
                    search={this.state.search}
                    changed={this.handleInputChange}
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