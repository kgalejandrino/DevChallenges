import React from 'react';

import './ButtonControls.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const buttonControls = (props) => {
    return (
        <Aux>
            <tbody>
                <tr>
                    <td><b>Text</b></td>
                    <td>
                        <textarea className="panel-textarea" onChange={props.btnTextChange} defaultValue="Default"></textarea>
                    </td>
                </tr>
                <tr>
                    <td><b>Color</b></td>
                    <td>
                        <div id="td-container">
                            <div className="td-boxes">
                                <div className="box">
                                    <span>Text</span>
                                    <input type="color" defaultValue="#efefef" onChange={props.btnTextColorChange}/>
                                </div>
                            </div>
                            <div className="td-boxes">
                                <div className="box">
                                    <span>Background</span>
                                    <input type="color" defaultValue="#efefef" onChange={props.btnBgColorChange}/>
                                </div>
                            </div>
                            <div className="td-boxes">
                                <div className="box">   
                                    <span>Shadow</span>
                                    <input type="color" defaultValue="#efefef" onChange={props.btnShadowColorChange}/>
                                </div>
                            </div>
                            <div className="td-boxes">
                                <div className="box">
                                    <span>Border Hover</span>
                                    <input type="color" defaultValue="#efefef" onChange={props.btnHoverColorChange}/>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><b>Button</b></td>
                    <td>
                        <select onChange={props.selectDisable} className="disabled">
                            <option>Enabled</option>
                            <option>Disabled</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><b>Box-shadow</b></td>
                    <td>
                        <select onChange={props.btnShadowChange}>
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

export default buttonControls;