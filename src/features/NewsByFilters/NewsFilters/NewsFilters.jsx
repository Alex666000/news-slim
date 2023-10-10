import React from 'react';
import Categories from '../../Categories/Categories.jsx'
import Search from '../../Search/Search.jsx'
import {useFetch} from '../../../components/shared/hooks/useFetch.js'
import {getCategories} from '../../../api/apiNew.js'
import styles from './styles.module.css'
import Slider from '../../../components/shared/Slider/Slider.jsx'


const NewsFilters = ({filters, changeFilter}) => {
    const {data: dataCategories} = useFetch(getCategories)

    return (
        <div className={styles.filters}>
            {dataCategories
                ? <Slider>
                    <Categories
                        categories={dataCategories?.categories}
                        setSelectedCategory={(category) => changeFilter('category', category)}
                        selectedCategory={filters?.category}
                    />
                </Slider>
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
