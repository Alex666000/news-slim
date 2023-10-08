import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import NewsBanner from './NewsBanner/NewsBanner.jsx'
import {getNews} from '../../api/apiNew.js'

const Main = () => {
    const [news, setNews] = useState([])


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await getNews()
                // console.log(news)
                setNews(data.news)
            } catch (error) {
                console.log(error)
            }
        }

        fetchNews()
    }, [])

    return (
        <main className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}
        </main>
    );
};

export default Main;
