import React from 'react';
import styles from './styles.module.css'

const Categories = ({categories = [], setSelectedCategory, selectedCategory}) => {

    return (
        <div className={styles.categories}>
            <button
                className={selectedCategory
                    ? styles.active
                    : styles.item
                } // подсвечиваем выбранный Таб
                onClick={() => setSelectedCategory(null)}
            >
                All
            </button>
            {categories.map((category) => {
                return (
                    <button
                        className={selectedCategory === category
                            ? styles.active
                            : styles.item} // подсвечиваем выбранный Таб
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    );
};

export default Categories;
