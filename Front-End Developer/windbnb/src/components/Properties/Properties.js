import React, { Component } from 'react';

import './Properties.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import Property from './Property/Property';

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

class Properties extends Component {
    constructor(props) {
        super(props);

        this.state = {
            property: propertyList
        }
    }

    render() {
        return (
            <Aux>
                <div className="Properties">
                    <div className="title-box">
                        <h2>Stays in Finland</h2>
                        <p>12+ stays</p>
                    </div>
                    <div className="properties-box">
                        {this.state.property.map((key, index) => {
                            return <Property 
                                key={index}
                                url={key.url}
                                host={key.host}
                                type={key.type}
                                rating={key.rating}
                                description={key.description}
                            />
                        })}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Properties;