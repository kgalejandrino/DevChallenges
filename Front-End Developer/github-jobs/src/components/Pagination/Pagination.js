import React from 'react';

import './Pagination.css';

const Pagination = ({jobsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/ jobsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="Pagination">
            <ul>
                {pageNumbers.map(num => (
                    <li key={num}>
                        <a href="#" onClick={() => paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;