import React from 'react';
import NewsItem from './NewsItem/NewsItem.jsx'
import styles from './styles.module.css'


const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => <NewsItem key={item.id} item={item}/>)}
        </ul>
    );
};

export default NewsList;
