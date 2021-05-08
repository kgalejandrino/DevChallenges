import React from 'react';

import './Pagination.css';

const Pagination = ({jobsPerPage, totalPosts, currentPage, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/ jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="Pagination">
            <ul>
                <li><span className="material-icons icon-navigate">navigate_before</span></li>
                {pageNumbers.map(num => (
                    <li key={num} className={currentPage === num ? 'active': null} onClick={() => paginate(num)}>
                        {num}
                    </li>
                ))}
                <li><span className="material-icons icon-navigate">navigate_next</span></li>
            </ul>
        </div>
    );
};

export default Pagination;