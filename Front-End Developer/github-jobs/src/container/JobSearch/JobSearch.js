import React, { Component } from 'react';

import './JobSearch.css';
import Search from '../../components/Search/Search';

class JobSearch extends Component {
    render() {
        return(
            <div className="JobSearch">
                <div className="title"><b>Github</b> Jobs</div>
                <Search />
            </div>
        )
    }
}

export default JobSearch;