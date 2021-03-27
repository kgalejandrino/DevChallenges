import React from 'react';

import './Panel.css';

const panel = () => {
    return (
        <div className="Panel">
            <div class="tab"><span>Controls</span></div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Control</th>
                </tr>
                <tr>
                    <td><b>disabled</b></td>
                    <td>
                        <span>True</span>
                        <span>False</span>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default panel;