import React from 'react';
import LatestNews from './LatestNews/LatestNews.jsx'
import NewsByFilters from '../../features/NewsByFilters/NewsByFilters.jsx'
import styles from './styles.module.css'


const Main = () => {

    return (
        <main className={styles.main}>
            <LatestNews/>
            <NewsByFilters/>
        </main>
    );
};

export default Main;
