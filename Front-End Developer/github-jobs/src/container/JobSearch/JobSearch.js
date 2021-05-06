import React, { Component } from 'react';
import axios from 'axios';

import './JobSearch.css';
import Search from '../../components/Search/Search';
import Main from '../../components/Main/Main';

class JobSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            location: 'california',
            description: '',
            fullTime: false,
        }
    }

    componentDidMount() {
        axios.get(`https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?location=${this.state.location}&page=1`)
        .then(response => {
            this.setState({ data: response.data })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleInputDescriptionChange = (event) => this.setState({ description: event.target.value })

    handleInputLocationChange = (event) => this.setState({ location: event.target.value })

    handleInputFullTimeChange = (event) => this.setState({fullTime: event.target.checked})
    
    fetchDataFromInput = () => {
        const { location, description, fullTime } = this.state;

        axios.get(`https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?location=${location}&description=${description}&full_time=${fullTime}&page=1`)
        .then(response => {
            this.setState({ data: response.data })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleSearchClicked = () => {
        const { location, description, fullTime } = this.state;
        console.log(location, description, fullTime);
        this.fetchDataFromInput();
    }

    render() {
        // console.log(this.state.data);
        // console.log(this.state.description);
        return(
            <div className="JobSearch">
                <div className="title"><b>Github</b> Jobs</div>
                <Search 
                    descriptionChanged={this.handleInputDescriptionChange}
                    searched={this.handleSearchClicked}
                />
                <Main 
                    data={this.state.data}
                    location={this.state.location}
                    locationChanged={this.handleInputLocationChange}
                    fullTimeChanged={this.handleInputFullTimeChange}
                />
            </div>
        )
    }
}

export default JobSearch;