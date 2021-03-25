import React from 'react';

import './Buttons.css';
import Button from './Button/Button';

const buttons = () => {
    return (
        <div className="Buttons">
            <p className="btn-title">Buttons</p>
            <div className="row">
                <Button textStyle="btn" paragraph="<Button />" button="Default"/>
                <Button textStyle="btn light-text" paragraph="&amp;:hover, &amp;:focus" button="Default"
                btnStyle="default-hover"/>
            </div>
            <div className="row">
                <Button textStyle="btn" btnStyle="outline" paragraph='<Button variant="outline"/>' button="Default"/>
                <Button textStyle="btn light-text" btnStyle="outline-hover" paragraph="&amp;:hover, &amp;:focus" button="Default"/>
            </div>
        </div>
    )
}

export default buttons;