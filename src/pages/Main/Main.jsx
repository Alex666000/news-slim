import React, {useState} from 'react';
import NewsBanner from './NewsBanner/NewsBanner.jsx'
import {getCategories, getNews} from '../../api/apiNew.js'
import NewsList from './NewsList/NewsList.jsx'
import styles from './styles.module.css'
import Pagination from '../../features/Pagination/Pagination.jsx'
import Categories from '../../features/Categories/Categories.jsx'
import Search from '../../features/Search/Search.jsx'
import {useDebounce} from '../../components/shared/hooks/useDebounce/useDebounce.js'
import {useFetch} from '../../components/shared/hooks/useFetch.js'
import {PAGE_SIZE, TOTAL_PAGES} from '../../components/shared/constants/constants.js'
import {useFilters} from '../../components/shared/hooks/useFilters.js'


const Main = () => {

    // customs hooks:
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

    const {data: dataCategories} = useFetch(getCategories)

    // handlers:
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1)
        }
    }

    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        changeFilter('page_number', pageNumber)
    }

    return (
        <main className={styles.main}>
            {dataCategories ? <Categories
                categories={dataCategories.categories}
                setSelectedCategory={(category) => changeFilter('category', category)}
                selectedCategory={filters.category}
            /> : null}
            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)}
            />

            <NewsBanner
                isLoading={isLoading}
                item={data && data.news && data.news[0]}
            />

            <Pagination
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
            />
            <NewsList
                isLoading={isLoading}
                news={data?.news}
            />

            <Pagination
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
            />
        </main>
    );
};

export default Main;
