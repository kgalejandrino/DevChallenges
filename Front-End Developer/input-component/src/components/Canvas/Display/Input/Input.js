import React from 'react';
import Radium from 'radium';

import './Input.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const input = (props) => {
    let hoverColor, focusColor = null;

    const inputStyles = {
        color: props.inputTextColor,
        borderColor: props.inputBorderColor
    }

    if(props.inputHoverColor) {
        hoverColor = {
          ':hover': {
            borderColor: props.inputHoverColor
          }           
        }
    }

    if(props.inputFocusColor) {
      focusColor = {
        ':focus': {
          borderColor: props.inputFocusColor
        }           
      }
  }

  const displayIcon = props.position ? <span className={`material-icons md-28 ${props.position}`}>{props.setIcon}</span> : null;

  const displayHelperText = props.componentState === 'input-validation' ? <p id="helper-text">Some interesting text</p> : null;

  const displayInput = 
            <div className="input-container">
              {displayIcon}
              <input 
                type="text"
                style={{...hoverColor, ...focusColor, ...inputStyles}}
                className={`input`}
                id={props.componentState}
                placeholder="Placeholder">
              </input>
              {displayHelperText}
            </div>

  const displayTextArea = <textarea rows="6" cols="20"id={props.componentState} placeholder="Placeholder"/>

  return (
    <Aux>
      {props.componentState === 'input-multiline'
        ? displayTextArea
        : displayInput
      }
    </Aux>
  )
}

export default Radium(input);