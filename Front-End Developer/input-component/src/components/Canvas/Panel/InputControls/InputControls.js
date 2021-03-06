import React from 'react';

import './InputControls.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const inputControls = (props) => {
    return (
        <Aux>
            <tbody>
               <tr>
                    <td><b>Color</b></td>
                    <td>
                    <div id="td-container">
                            <div className="td-boxes">
                                <div className="box">
                                    <span>Text</span>
                                    <input type="color" defaultValue="#efefef" onChange={props.inputTextColorChange}/>
                                </div>
                            </div>
                            <div className="td-boxes">
                                <div className="box">
                                    <span>Border</span>
                                    <input type="color" defaultValue="#efefef" onChange={props.inputBorderColorChange}/>
                                </div>
                            </div>
                            <div className="td-boxes">
                                <div className="box">   
                                    <span>Hover</span>
                                    <input type="color" defaultValue="#efefef" onChange={props.inputHoverColorChange}/>
                                </div>
                            </div>
                            <div className="td-boxes">
                                <div className="box">
                                    <span>Focus</span>
                                    <input type="color" defaultValue="#efefef" onChange={props.inputFocusColorChange}/>
                                </div>
                            </div>
                        </div>
                    </td>
               </tr>
               <tr>
                   <td><b>Input</b></td>
                   <td>
                        <select onChange={props.selectDisable} className="disabled">
                            <option>Enabled</option>
                            <option>Disabled</option>
                        </select>
                    </td>
               </tr>
               <tr>
                    <td><b>Change Icon</b></td>
                    <td>
                        <select onChange={props.selectIcon}>
                                <option>face</option>
                                <option>heart</option>
                                <option>leaf</option>
                                <option>tool</option>
                                <option>star</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><b>Change Size</b></td>
                    <td>
                        <select onChange={props.selectSize}>
                                <option>small</option>
                                <option>medium</option>
                                <option>large</option>
                        </select>
                    </td>                        
                </tr>
            </tbody>
        </Aux>
    )
}

export default inputControls;