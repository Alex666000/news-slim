import React, {useEffect, useState} from 'react';
import NewsBanner from './NewsBanner/NewsBanner.jsx'
import {getNews} from '../../api/apiNew.js'
import NewsList from './NewsList/NewsList.jsx'
import Skeleton from '../../components/shared/Skeleton/Skeleton.jsx'
import styles from './styles.module.css'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const data = await getNews()

                setNews(data.news)
                setIsLoading(false)
            } catch (error) {
                // console.log(error)
            }
        }
        fetchNews()
    }, [])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading
                ? <NewsBanner item={news[0]}/>
                : <Skeleton count={1} type={'banner'}/>
            }
            {!isLoading
                ? <NewsList news={news}/>
                : <Skeleton type={'item'} count={10}/>
            }
        </main>
    );
};

export default Main;
