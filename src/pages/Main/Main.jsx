import React from 'react';
import {getNews} from '../../api/apiNew.js'
import {useDebounce} from '../../components/shared/hooks/useDebounce/useDebounce.js'
import {useFetch} from '../../components/shared/hooks/useFetch.js'
import {PAGE_SIZE} from '../../components/shared/constants/constants.js'
import {useFilters} from '../../components/shared/hooks/useFilters.js'
import LatestNews from './LatestNews/LatestNews.jsx'
import NewsByFilters from '../../features/NewsByFilters/NewsByFilters.jsx'
import styles from './styles.module.css'


const Main = () => {
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


    return (
        <main className={styles.main}>
            <LatestNews isLoading={isLoading} banners={data && data.news}/>
            <NewsByFilters
                news={data?.news || []}
                isLoading={isLoading}
                fitlers={filters}
                changeFilter={changeFilter}
            />
        </main>
    );
};

export default Main;
