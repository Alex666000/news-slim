import React from 'react';
import BannersList from './BannerList/BannersList.jsx'
import styles from './styles.module.css'
import {useFetch} from '../../../components/shared/hooks/useFetch.js'
import {getLatestNews} from '../../../api/apiNew.js'

const LatestNews = () => {
    const {data, isLoading} = useFetch(getLatestNews)

    return (
        <section className={styles.latest}>
            <BannersList banners={data && data.news} isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;
