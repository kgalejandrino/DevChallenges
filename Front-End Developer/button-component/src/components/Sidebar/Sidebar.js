import React, { Component } from 'react';

import './Sidebar.css';
import ButtonStories from './ButtonStories/ButtonStories';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btnStories: false
        }
    }

    showBtnStories = () => {
        this.setState(prevState => ({
            btnStories: !prevState.btnStories
        }));
    }

    render() {
        return (
            <div className="Sidebar">
                <div className="sidebar-title">
                    <span className="dev"><b>Dev</b></span>
                    <span className="challenges"><b>challenges.io</b></span>
                </div>
                <nav>
                    <ul className="main-nav">
                        <li>Colors</li>
                        <li>Typography</li>
                        <li>Spaces</li>
                        <li onClick={this.showBtnStories}>Buttons</li>
                        {this.state.btnStories ? <ButtonStories /> : null}
                        <li>Inputs</li>
                        <li>Grid</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;