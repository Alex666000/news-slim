import React from 'react';
import Pagination from '../../features/Pagination/Pagination.jsx'

const PaginationWrapper = ({top, bottom, children, ...paginationProps}) => {

    return (
        <>
            {top && <Pagination {...paginationProps}/>}
            {children}
            {bottom && <Pagination {...paginationProps}/>}
        </>
    );
};

export default PaginationWrapper;
