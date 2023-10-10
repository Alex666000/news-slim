import React from 'react';
import BannersList from './BannerList/BannersList.jsx'
import styles from './styles.module.css'

const LatestNews = ({banners, isLoading}) => {

    return (
        <section className={styles.latest}>
          <BannersList banners={banners} isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;
