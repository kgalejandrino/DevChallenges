import React, { Component } from 'react';

import './Layout.css';
import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';
import Properties from '../../components/Properties/Properties';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import FilterCity from '../../components/FilterCity/FilterCity';
import FilterGuest from '../../components/FilterGuest/FilterGuest';

const propertyList = [
    {
        'location': 'Helsinki, Finland',
        'url': 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
        'host': true,
        'type': 'Entire apartment. 2 beds',
        'rating': 4.40,
        'description': 'Stylist aparment in the center of the city'
    },
    {
        'location': 'Helsinki, Finland',
        'url': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        'host': false,
        'type': 'Private room',
        'rating': 4.25,
        'description': 'Cozy, peaceful and private room with...'
    },
    {
        'location': 'Turku, Finland',
        'url': 'https://images.unsplash.com/photo-1603111691889-364c9fc6d066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'host': false,
        'type': 'Entire house',
        'rating': 4.96,
        'description': 'Modern House'
    },
    {
        'location': 'Turku, Finland',
        'url': 'https://images.unsplash.com/photo-1615298681607-14ec66115339?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        'host': true,
        'type': 'Entire apartment. 2 beds',
        'rating': 4.85,
        'description': 'Stylist room in design district'
    },
    {
        'location': 'Oulu, Finland',
        'url': 'https://images.unsplash.com/photo-1604809226867-0c54292210d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'host': false,
        'type': 'Private room',
        'rating': 4.54,
        'description': 'Modern apartment close to nature'
    },
    {
        'location': 'Vaas, Finland',
        'url': 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'host': false,
        'type': 'Entire house',
        'rating': 4.64,
        'description': 'House in a remote area'
    },
];

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: propertyList,
            filterDrawer: false,
            locationInput: '',
            guestInput: 'Add',
            filterGuest: false,
            filterSearch: false,
            citySelected: false,
            adultGuestVal: 0,
            childGuestVal: 0
        }
    }

    componentDidMount = () => document.addEventListener("keydown", this.handleHideDropdownPress);
    
    componentWillUnmount = () => document.removeEventListener("keydown", this.handleHideDropdownPress);

    handleHideDropdownPress = event => {
        if(event.keyCode === 27) {
            this.setState({ 
                filterDrawer: false
            }); 
        }
    }

    handleInputChange = (event) => this.setState({locationInput: event.target.value, citySelected: false});
    
    handleHideFilterDrawer = () => this.setState({ filterDrawer: false });
    
    handleShowFilterSearch = () => {
        this.setState({ 
            filterSearch: true,
            filterDrawer: true,
            filterGuest: false
        });
    }

    handleShowFilterGuest = () => {
        this.setState({ 
            filterGuest: true,
            filterDrawer: true,
            filterSearch: false,
        });

        if(!this.state.citySelected) this.setState({ locationInput: ''})
    }

    setAdultValue = (val) => this.setState({ adultGuestVal: val});

    setChildrenValue = (val) => this.setState({ childGuestVal: val});

    handleHideFilterGuest = (hide) => { this.setState({ filterGuest: hide }); }

    getGuestTotal = total => {
        if(total > 0) {
            // if(this.state.guestInput === 'Add') {
            //     this.setState({ guestInput: total})
            // } else {
            //     this.setState(prevState => ({
            //         guestInput: prevState.guestInput + total
            //     }));
            // }
            this.setState({ guestInput: total})
        }
    }

    handleCitySelection = (event) => {
        this.setState({
            locationInput: event.currentTarget.innerText,
            citySelected: true
        })
    }



    render() {
        const dropdownStyle = { flexFlow: 'column'}; 
        const uniqueCity = [];

        this.state.properties.forEach(property => {
                if(uniqueCity.indexOf(property.location) === -1) {
                    uniqueCity.push(property.location);
                }
            });
        
        let filteredCity = uniqueCity.filter(city => {
            return this.state.locationInput && city.toLowerCase().indexOf(this.state.locationInput.toLowerCase()) !== -1;
        });

        const renderFilteredCity = this.state.locationInput && filteredCity.length === 0
                ? <FilterCity>Search Not Found</FilterCity>
                : filteredCity.map((filter, index) => {
                    return <FilterCity 
                                key={index} 
                                clicked={this.handleCitySelection}>{filter}
                            </FilterCity>
            })
        ;
        
        return (
            <div className="Layout">
                <Backdrop 
                    showDrawer={this.state.filterDrawer}
                    clicked={this.handleHideFilterDrawer}
                />
                <Dropdown 
                    showDrawer={this.state.filterDrawer}
                />
                <header style={this.state.filterDrawer ? dropdownStyle : null} className="header">
                    <Logo />
                    <SearchBar
                        location={this.state.locationInput}
                        guest={this.state.guestInput}
                        showDrawer={this.state.filterDrawer}
                        showSearch={this.state.filterSearch} 
                        showGuest={this.state.filterGuest}
                        filterSearch={this.handleShowFilterSearch}
                        filterGuest={this.handleShowFilterGuest}
                        changed={this.handleInputChange}
                        propertiesList={this.state.properties}
                        add={this.state.filterGuest}
                    />
                    <div className="filtered-container">
                        {this.state.filterSearch && !this.state.citySelected ? <div className="city-container">{renderFilteredCity}</div> : null}
                        {this.state.filterGuest ? 
                            <FilterGuest 
                                hideGuest={this.handleHideFilterGuest} 
                                total={this.getGuestTotal}
                                adultVal={this.state.adultGuestVal}
                                childVal={this.state.childGuestVal}
                                getAdultValue={this.setAdultValue}
                                getChildrenValue={this.setChildrenValue}
                            />
                            : null
                        }
                    </div>
                </header>
                <main>
                    <Properties 
                        propertiesList={this.state.properties}
                    />
                </main>
            </div>
        )
    }
}

export default Layout;

