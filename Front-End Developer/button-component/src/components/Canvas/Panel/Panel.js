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
                        <td><b>disabled</b></td>
                        <td>
                            <select onChange={props.selected} className="disabled">
                                <option>False</option>
                                <option>True</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default panel;