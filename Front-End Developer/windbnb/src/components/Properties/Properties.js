import React from 'react';

import './Properties.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import Property from './Property/Property';

const properties = (props) => {
    const properties = props.propertiesList.filter(key => key.location === props.location);
    const propertiesWithGuest = props.propertiesList.filter(key => key.location === props.location && key.guest >= props.guest);

    const totalStays = props.guest === 'Add' 
        ? <Aux><h2>Stays in {props.location}</h2><p>{properties.length}+ stays</p></Aux> 
        : <Aux><h2>Stays in {props.location}</h2><p>{propertiesWithGuest.length}+ stays</p></Aux>;
        
    return (
        <Aux>
            <div className="Properties">
                <div className="title-box">
                    {props.selected ? totalStays : null}
                </div>
                {props.guest === 'Add'
                    ? <div className="properties-box" style={properties.length < 3 ? {justifyContent: "flex-start"} : null}>
                        {properties.map((key, index) => {
                        return <Property 
                                key={index}
                                url={key.url}
                                host={key.host}
                                type={key.type}
                                rating={key.rating}
                                description={key.description}
                                length={properties.length}
                            />
                        })}
                    </div>
                    : <div className="properties-box" style={propertiesWithGuest.length < 3 ? {justifyContent: "flex-start"} : null}>
                        {propertiesWithGuest.map((key, index) => {
                        return <Property 
                                    key={index}
                                    url={key.url}
                                    host={key.host}
                                    type={key.type}
                                    rating={key.rating}
                                    description={key.description}
                                    length={propertiesWithGuest.length}
                                />
                        })}
                    </div>
                }
            </div>
        </Aux>
    )
}

export default properties;