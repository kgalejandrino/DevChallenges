import React, { Component } from 'react';

import './Layout.css';
import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';
import Properties from '../../components/Properties/Properties';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false
        }
    }

    handleDropdownClick = () => this.setState({ dropdown: true});

    render() {
        const dropdownStyle = {flexFlow: 'column'}; 

        return (
            <div className="Layout">
                { this.state.dropdown ? <Backdrop /> : null }
                { this.state.dropdown ? <Dropdown /> : null }
                <header style={this.state.dropdown ? dropdownStyle : null} className="header">
                    <Logo />
                    <SearchBar
                        dropdown={this.state.dropdown} 
                        clickedDropdown={this.handleDropdownClick}
                    />
                </header>
                <main>
                    <Properties />
                </main>
            </div>
        )
    }
}

export default Layout;

