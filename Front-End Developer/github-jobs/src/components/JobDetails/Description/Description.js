import React from 'react';

import './Description.css';
import { calculateDate } from '../../../utils/Utils';
import Aux from '../../../hoc/Auxiliary';

const description = (props) => {


    return(
        <Aux>
            <div className="des_box1">
                <span className="des-title">{props.data.title}</span>
                <span className="type des-type">{props.data.type}</span>
            </div>
            <div className="des_box2 time-date">
                <span className="material-icons time-icon">schedule</span>
                <span>{calculateDate(props.data.date)}</span>
            </div>
            <div className="des_box3">
                <div className="des-logo">
                    {props.data.logo
                        ? <img src={props.data.logo} alt="company-logo"></img>
                        : <div className="not-found des-not-found">not found</div>
                    }
                </div>
                <div className="box3-name--loc">
                    <p className="des-name">{props.data.name}</p>
                    <div className="time-date">
                        <span className="material-icons city-icon" style={{ fontSize: "18px"}}>public</span>
                        <span>{props.data.location}</span>
                    </div>
                </div>
            </div>
            <div className="description" dangerouslySetInnerHTML={{__html: props.data.description}}>
            </div>
        </Aux>
    )
}

export default description;