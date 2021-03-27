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
                        <td><b>button</b></td>
                        <td>
                            <select onChange={props.selectDisable} className="disabled">
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><b>box-shadow</b></td>
                        <td>
                            <select onChange={props.selectShadow}>
                                    <option>Enabled</option>
                                    <option>Disabled</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default panel;