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

  const size = (s) => {
    if(s === 'small') {
        s = 'input-small';
    } else if(s === 'medium') {
        s = 'input-medium';
    } else if(s === 'large') {
        s = 'input-large';
    }
    return s;
  }

  const displayIcon = props.position ? <span className={`material-icons md-28 ${props.position}`}>{props.setIcon}</span> : null;

  const displayHelperText = props.componentState === 'input-validation' ? <p id="helper-text">Some interesting text</p> : null;

  const displayInput = 
            <div className="input-container">
              {displayIcon}
              <input 
                type="text"
                style={{...hoverColor, ...focusColor, ...inputStyles}}
                className={`input ${size(props.setSize)}`}
                id={props.componentState}
                placeholder="Placeholder"
                disabled={props.isDisabled}>
              </input>
              {displayHelperText}
            </div>

  const displayTextArea = 
          <textarea 
              rows="6" 
              cols="20"
              style={{...hoverColor, ...focusColor, ...inputStyles}}
              id={props.componentState} 
              placeholder="Placeholder"
              disabled={props.isDisabled}
          />

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