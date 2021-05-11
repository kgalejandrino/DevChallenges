import React from 'react';

import './Pagination.css';

const Pagination = (props) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalPosts/ props.jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(num => {
        if(num < props.maxPage + 1 && num > props.minPage) {
            return (
                <li 
                    key={num} 
                    className={props.currentPage === num ? 'active': null} 
                    onClick={() => props.paginate(num)}>
                    {num}
                </li>
            );
        } else {
            return null;
        }
    });

    let pageDecrementBtn = null;
    if(props.minPage >= 1) {
        pageDecrementBtn = <li style={{ border: "none", padding: "0"}} onClick={props.prevPage}>&hellip;</li>
    }
    
    let pageIncrementBtn = null;
    if(pageNumbers.length > props.maxPage) {
        pageIncrementBtn = <li style={{ border: "none", padding: "0"}} onClick={props.nextPage}>&hellip;</li>
    }

    return (
        <div className="Pagination">
            <ul>
                <li onClick={props.prevPage} className={props.currentPage === pageNumbers[0] ? 'disabled' : null}>
                    <span className="material-icons icon-pagination">navigate_before</span>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li onClick={props.nextPage} className={props.currentPage === pageNumbers.length ? 'disabled' : null}>
                    <span className="material-icons icon-pagination">navigate_next</span>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;