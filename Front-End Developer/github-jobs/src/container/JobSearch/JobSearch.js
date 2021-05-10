import React, { Component } from 'react';
import axios from 'axios';

import './JobSearch.css';
import Aux from '../../hoc/Auxiliary';
import Search from '../../components/Search/Search';
import Main from '../../components/Main/Main';
import JobDetails from '../../components/JobDetails/JobDetails';

class JobSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            location: 'california',
            description: '',
            fullTime: false,
            currentPage: 1,
            jobsPerPage: 5,
            loading: false,
            maxPageNumberLimit: 5,
            minPageNumberLimit: 0,
            jobClicked: false,
            dataClicked: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true });

        axios.get(`https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?location=${this.state.location}&page=1`)
        .then(response => {
            this.setState({ 
                data: response.data,
                loading: false 
            })
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

        this.setState({ loading: true });

        axios.get(`https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?location=${location}&description=${description}&full_time=${fullTime}&page=1`)
        .then(response => {
            this.setState({ 
                data: response.data ,
                loading: false
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleSearchClicked = () => {
        const { location, description, fullTime } = this.state;
        console.log(location, description, fullTime);
        this.fetchDataFromInput();
        this.setState({ currentPage: 1 })
    }

    handlePaginationClick = (pageNo) => this.setState({ currentPage: pageNo })

    handleNextPageClick = () => {
        const { currentPage, maxPageNumberLimit, jobsPerPage } = this.state;
        this.setState(prevState => ({ currentPage: prevState.currentPage + 1}))

        if(currentPage + 1 > maxPageNumberLimit) {
            this.setState(prevState => ({ 
                maxPageNumberLimit: prevState.maxPageNumberLimit + jobsPerPage,
                minPageNumberLimit: prevState.minPageNumberLimit + jobsPerPage
            }))
        }
    }

    handlePrevPageClick = () => {
        const { currentPage,  jobsPerPage } = this.state;
        this.setState(prevState => ({ currentPage: prevState.currentPage - 1}))

        if((currentPage - 1) % jobsPerPage === 0) {
            this.setState(prevState => ({ 
                maxPageNumberLimit: prevState.maxPageNumberLimit - jobsPerPage,
                minPageNumberLimit: prevState.minPageNumberLimit - jobsPerPage
            }))
        }
    }

    handleJobClicked = (data) => {
        this.setState({ 
            jobClicked: true,
            dataClicked: data
        });
    }

    handleBackToSearchClicked = () => this.setState({ jobClicked: false });

    render() {
        console.log(this.state.data);
        const { data, location, currentPage, jobsPerPage, maxPageNumberLimit, minPageNumberLimit, jobClicked } = this.state;
        const indexOfLastJob = currentPage * jobsPerPage;
        const indexOfFirstJob = indexOfLastJob - jobsPerPage; 
        const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);

        const renderMain = <Aux>
                <Search 
                    descriptionChanged={this.handleInputDescriptionChange}
                    searched={this.handleSearchClicked}
                />
                <Main 
                    data={currentJobs}
                    location={location}
                    locationChanged={this.handleInputLocationChange}
                    fullTimeChanged={this.handleInputFullTimeChange}
                    jobsPerPage={jobsPerPage}
                    totalPosts={data.length}
                    currentPage={currentPage}
                    maxPage={maxPageNumberLimit}
                    minPage={minPageNumberLimit}
                    paginate={this.handlePaginationClick}
                    nextPage={this.handleNextPageClick}
                    prevPage={this.handlePrevPageClick}
                    loading={this.state.loading}
                    jobClicked={this.handleJobClicked}
                />
            </Aux>
        return(
            <div className="JobSearch">
                <div className="title"><b>Github</b> Jobs</div>
                { jobClicked
                    ? <JobDetails 
                        backToSearch={this.handleBackToSearchClicked}
                        data={this.state.dataClicked}  
                      />
                    : renderMain
                }
    
            </div>
        )
    }
}

export default JobSearch;