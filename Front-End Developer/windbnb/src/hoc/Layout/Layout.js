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
            show: false
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



    render() {
        const dropdownStyle = {flexFlow: 'column'}; 

        return (
            <div className="Layout">
                <Backdrop 
                    show={this.state.show}
                    clicked={this.handleHideDropdownClick}
                />
                { this.state.show ? <Dropdown /> : null }
                <header style={this.state.show ? dropdownStyle : null} className="header">
                    <Logo />
                    <SearchBar
                        show={this.state.show} 
                        clicked={this.handleShowDropdownClick}
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

