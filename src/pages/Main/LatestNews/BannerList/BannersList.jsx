import React from 'react';
import {withSkeleton} from '../../../../components/shared/helpers/hoc/withSkeleton.jsx'
import NewsBanner from './NewsBanner/NewsBanner.jsx'
import styles from './styles.module.css'

const BannersList = ({banners}) => {

    return (
        <ul className={styles.banners}>
            {banners?.map((banner) => {
                return <NewsBanner key={banner.id} item={banner}/>
            })}
        </ul>
    );
};

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 12, 'row')

export default BannersListWithSkeleton;
