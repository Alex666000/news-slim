import React from 'react';
import Categories from '../../Categories/Categories.jsx'
import Search from '../../Search/Search.jsx'
import {useFetch} from '../../../components/shared/hooks/useFetch.js'
import {getCategories} from '../../../api/apiNew.js'
import styles from './styles.module.css'


const NewsFilters = ({filters, changeFilter}) => {
    const {data: dataCategories} = useFetch(getCategories)

    return (
        <div className={styles.filters}>
            {dataCategories
                ? <Categories
                    categories={dataCategories?.categories}
                    setSelectedCategory={(category) => changeFilter('category', category)}
                    selectedCategory={filters?.category}
                />
                : null
            }
            <Search
                keywords={filters?.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)}
            />
        </div>
    );
};

export default NewsFilters;
