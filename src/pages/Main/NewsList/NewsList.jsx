import React from 'react';
import NewsItem from './NewsItem/NewsItem.jsx'
import styles from './styles.module.css'
import {withSkeleton} from '../../../components/shared/helpers/hoc/withSkeleton.jsx'


const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => <NewsItem key={item.id} item={item}/>)}
        </ul>
    );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton;
