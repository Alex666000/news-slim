import React, {useEffect, useState} from 'react';
import NewsBanner from './NewsBanner/NewsBanner.jsx'
import {getNews} from '../../api/apiNew.js'
import NewsList from './NewsList/NewsList.jsx'
import Skeleton from '../../components/shared/Skeleton/Skeleton.jsx'
import styles from './styles.module.css'
import Pagination from '../../components/shared/Pagination/Pagination.jsx'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = 10 // кол-во страниц
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const data = await getNews(currentPage, pageSize)

            setNews(data.news)
            setIsLoading(false)
        } catch (error) {
            throw new Error('Some error')
        }
    }

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage])

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading
                ? <NewsBanner item={news[0]}/>
                : <Skeleton count={1} type={'banner'}/>
            }
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
            />
            {!isLoading
                ? <NewsList news={news}/>
                : <Skeleton type={'item'} count={10}/>
            }
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
            />
        </main>
    );
};

export default Main;
