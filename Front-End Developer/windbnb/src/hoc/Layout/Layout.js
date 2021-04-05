import React, { Component } from 'react';

import './Layout.css';
import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';
import Properties from '../../components/Properties/Properties';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import FilteredCity from '../../components/FilteredCity/FilteredCity';

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
            show: false,
            searchInput: '',
        }
    }

    componentDidMount = () => document.addEventListener("keydown", this.handleHideDropdownPress);
    
    componentWillUnmount = () => document.removeEventListener("keydown", this.handleHideDropdownPress);

    handleShowDropdownClick = () => this.setState({ show: true});

    handleHideDropdownClick = () => this.setState({ show: false});

    handleHideDropdownPress = event => {
        if(event.keyCode === 27) {
            this.setState({ show: false}); 
        }
    }

    handleInputChange = (event) => this.setState({searchInput: event.target.value});




    render() {
        const dropdownStyle = {flexFlow: 'column'}; 
        const uniqueCity = [];

        this.state.properties.forEach(property => {
                if(uniqueCity.indexOf(property.location) === -1) {
                    uniqueCity.push(property.location);
                }
            });
        
        let filteredCity = uniqueCity.filter(city => {
            return city.toLowerCase().indexOf(this.state.searchInput) !== -1;
        });

        const renderFilteredCity = filteredCity.length === 0 
            ? <FilteredCity>Search Not Found</FilteredCity>
            : filteredCity.map((filter, index) => {
                return <FilteredCity key={index}>{filter}</FilteredCity>
            })
        ;
        
        return (
            <div className="Layout">
                <Backdrop 
                    show={this.state.show}
                    clicked={this.handleHideDropdownClick}
                />
                <Dropdown show={this.state.show}/>
                <header style={this.state.show ? dropdownStyle : null} className="header">
                    <Logo />
                    <SearchBar
                        show={this.state.show} 
                        clicked={this.handleShowDropdownClick}
                        changed={this.handleInputChange}
                        propertiesList={this.state.properties}
                    />
                    {this.state.searchInput === '' 
                        ? '' 
                        : <div className="filteredCity-container">{renderFilteredCity}</div>
                    }
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

