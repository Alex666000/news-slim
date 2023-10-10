import React from 'react';
import Pagination from '../Pagination/Pagination.jsx'
import {TOTAL_PAGES} from '../../components/shared/constants/constants.js'
import NewsList from '../../pages/Main/NewsList/NewsList.jsx'
import styles from './styles.module.css'
import NewsFilters from './NewsFilters/NewsFilters.jsx'


const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters?.page_number + 1)
        }
    }

    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters?.page_number - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        changeFilter('page_number', pageNumber)
    }

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter}/>
            <Pagination
                totalPages={TOTAL_PAGES}
                currentPage={filters?.page_number}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
            />
            <NewsList
                isLoading={isLoading}
                news={news}
            />
            <Pagination
                totalPages={TOTAL_PAGES}
                currentPage={filters?.page_number}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
            />
        </section>
    );
};

export default NewsByFilters;
