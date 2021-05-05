import React, { Component } from 'react';
import axios from 'axios';

import './JobSearch.css';
import Search from '../../components/Search/Search';
import Main from '../../components/Main/Main';

class JobSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get("https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?location=california&page=1")
        .then(response => {
            this.setState({ data: response.data })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state.data);
        return(
            <div className="JobSearch">
                <div className="title"><b>Github</b> Jobs</div>
                <Search />
                <Main 
                    data={this.state.data}
                />
            </div>
        )
    }
}

export default JobSearch;