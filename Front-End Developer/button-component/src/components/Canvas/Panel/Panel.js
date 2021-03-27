import React from 'react';

import './Panel.css';

const panel = (props) => {
    return (
        <div className="Panel">
            <div className="tab"><span>Controls</span></div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Control</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Button Text</b></td>
                        <td>
                            <textarea onChange={props.changeText}>Default</textarea>
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
                            <select onChange={props.selectShadow}>
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
            </table>
        </div>
    )
}

export default panel;