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
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
        'host': true,
        'type': 'Entire apartment. 2 beds',
        'rating': 4.40,
        'description': 'Stylist aparment in the center of the city'
    },
    {
        'location': 'Helsinki, Finland',
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        'host': false,
        'type': 'Private room',
        'rating': 4.25,
        'description': 'Cozy, peaceful and private room with...'
    },
    {
        'location': 'Helsinki, Finland',
        'guest': 6,
        'url': 'https://images.unsplash.com/photo-1603111691889-364c9fc6d066?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'host': false,
        'type': 'Entire house',
        'rating': 4.96,
        'description': 'Modern House'
    },
    {
        'location': 'Helsinki, Finland',
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1615298681607-14ec66115339?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        'host': true,
        'type': 'Entire apartment. 2 beds',
        'rating': 4.85,
        'description': 'Stylist room in design district'
    },
    {
        'location': 'Helsinki, Finland',
        'guest': 3,
        'url': 'https://images.unsplash.com/photo-1604809226867-0c54292210d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'host': false,
        'type': 'Private room',
        'rating': 4.54,
        'description': 'Modern apartment close to nature'
    },
    {
        'location': 'Helsinki, Finland',
        'guest': 8,
        'url': 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'host': false,
        'type': 'Entire house',
        'rating': 4.64,
        'description': 'House in a remote area'
    },
    {
        'location': 'Turku, Finland',
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'host': false,
        'type': '1 Bedroom apartment',
        'rating': 4.22,
        'description': 'Apartment by the city'
    },
    {
        'location': 'Turku, Finland',
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        'host': false,
        'type': 'Private room',
        'rating': 3.90,
        'description': 'Outside City'
    },
    {
        'location': 'Turku, Finland',
        'guest': 4,
        'url': 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'host': false,
        'type': 'Entire house',
        'rating': 4.80,
        'description': 'Best location closed to the beach'
    },
    {
        'location': 'Oulu, Finland',
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'host': false,
        'type': 'Cabin at Wild Forest',
        'rating': 4.40,
        'description': 'Modern interior design'
    },
    {
        'location': 'Oulu, Finland',
        'guest': 4,
        'url': 'https://images.unsplash.com/photo-1591774017832-02c686dedd32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'host': false,
        'type': 'Tiny house',
        'rating': 4.10,
        'description': 'Peaceful retreat house'
    },
    {
        'location': 'Oulu, Finland',
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        'host': false,
        'type': 'Luxurious 1 bedroom',
        'rating': 4.92,
        'description': 'Perfect view of the city'
    },
    {
        'location': 'Vaasa, Finland',
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
        'host': false,
        'type': 'Cozy private room',
        'rating': 4.92,
        'description': 'Clean and quiet room'
    },
    {
        'location': 'Vaasa, Finland',
        'guest': 2,
        'url': 'https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80',
        'host': false,
        'type': 'Entire apartment',
        'rating': 4.92,
        'description': 'Complete package (minutes away from town)'
    },
    {
        'location': 'Vaasa, Finland',
        'guest': 4,
        'url': 'https://images.unsplash.com/photo-1616593969747-4797dc75033e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
        'host': false,
        'type': 'Vacation house with private entrance',
        'rating': 4.92,
        'description': 'Cozy balcony for morning coffee'
    },
    {
        'location': 'Vaasa, Finland',
        'guest': 6,
        'url': 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'host': false,
        'type': 'Beautiful house',
        'rating': 4.92,
        'description': 'Perfect getaway at Vaasa'
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
            filterLocation: false,
            citySelected: false,
            adultGuestVal: 0,
            childGuestVal: 0,
            searchLocation: '',
            searchGuestNo: ''
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
    
    handleShowFilterLocation = () => {
        this.setState({ 
            filterLocation: true,
            filterDrawer: true,
            filterGuest: false,
            searchClicked: false
        });
    }

    setShowFilterLocation = (bool) => this.setState({ filterLocation: bool });

    handleShowFilterGuest = () => {
        this.setState({ 
            filterGuest: true,
            filterDrawer: true,
            filterLocation: false,
        });

        if(!this.state.citySelected) this.setState({ locationInput: ''})
    }

    handleHideFilterGuest = (hide) => { this.setState({ filterGuest: hide }); }
    
    setAdultValue = (val) => this.setState({ adultGuestVal: val});

    setChildrenValue = (val) => this.setState({ childGuestVal: val});

    getGuestTotal = total => {
        if(total > 0) {
            this.setState({ guestInput: total})
        }
    }

    handleCitySelection = (event) => {
        this.setState({
            locationInput: event.currentTarget.innerText,
            citySelected: true
        })
    }

    handleSearchLocation = (loc) => {
        this.setState({ searchLocation: loc })
    }

    handleGuestNumber = (val) => {
        this.setState({ searchGuestNo: val })
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
                        hideDrawer={this.handleHideFilterDrawer}
                        showGuest={this.state.filterGuest}
                        filterLocation={this.handleShowFilterLocation}
                        filterGuest={this.handleShowFilterGuest}
                        changed={this.handleInputChange}
                        propertiesList={this.state.properties}
                        add={this.state.filterGuest}
                        locationSelected={this.state.citySelected}
                        searchedLocation={this.handleSearchLocation}
                        searchedGuestNo={this.handleGuestNumber}
                        showFilterLoc={this.setShowFilterLocation}
                    />
                    <div className="filtered-container">
                        {this.state.filterLocation && !this.state.citySelected ? <div className="city-container">{renderFilteredCity}</div> : null}
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
                        location={this.state.searchLocation}
                        guest={this.state.searchGuestNo}
                        selected={this.state.citySelected}
                    />
                </main>
            </div>
        )
    }
}

export default Layout;

