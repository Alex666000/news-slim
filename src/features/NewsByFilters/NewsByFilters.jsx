import React from 'react';
import {PAGE_SIZE, TOTAL_PAGES} from '../../components/shared/constants/constants.js'
import NewsList from '../../pages/Main/NewsList/NewsList.jsx'
import styles from './styles.module.css'
import NewsFilters from './NewsFilters/NewsFilters.jsx'
import {useFilters} from '../../components/shared/hooks/useFilters.js'
import {useDebounce} from '../../components/shared/hooks/useDebounce/useDebounce.js'
import {useFetch} from '../../components/shared/hooks/useFetch.js'
import {getNews} from '../../api/apiNew.js'
import PaginationWrapper from '../../components/PaginationWrapper/PaginationWrapper.jsx'


const NewsByFilters = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })

    const debounceKeywords = useDebounce(filters.keywords, 1500)

    const {data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debounceKeywords
    })

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
            <PaginationWrapper
                top
                bottom
                totalPages={TOTAL_PAGES}
                currentPage={filters?.page_number}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
            >
                <NewsList isLoading={isLoading} news={data?.news}/>
            </PaginationWrapper>

        </section>
    );
};

export default NewsByFilters;
