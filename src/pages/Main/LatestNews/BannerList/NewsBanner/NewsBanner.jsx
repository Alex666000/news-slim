import React from 'react';
import {formatTimeAgo} from '../../../../../components/shared/helpers/formatTimeAgo.js'
import Image from '../../../../../components/shared/Image/Image.jsx'
import styles from './styles.module.css'
import {withSkeleton} from '../../../../../components/shared/helpers/hoc/withSkeleton.jsx'

const NewsBanner = ({item}) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    );
}

export default NewsBanner



