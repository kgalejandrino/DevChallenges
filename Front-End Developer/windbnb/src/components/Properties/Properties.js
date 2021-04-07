import React from 'react';

import './Properties.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import Property from './Property/Property';

const properties = (props) => {
    
    return (
        <Aux>
            <div className="Properties">
                <div className="title-box">
                    <h2>Stays in Finland</h2>
                    <p>12+ stays</p>
                </div>
                <div className="properties-box">
                    {props.propertiesList.map((key, index) => {
                        if((key.location === props.location)) {
                            return <Property 
                            key={index}
                            url={key.url}
                            host={key.host}
                            type={key.type}
                            rating={key.rating}
                            description={key.description}
                        />
                        }
                    })}
                </div>
            </div>
        </Aux>
    )
}

export default properties;