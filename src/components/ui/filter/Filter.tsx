'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import { FilterProps } from '@/types';


export function Filter<T>({ data, categories, onFilter, getCategory }: FilterProps<T>) {
  const [activeCategory, setActiveCategory] = useState('Все');

  const handleClick = (category: string) => {
    setActiveCategory(category);

    if (category === 'Все') {
      onFilter(data);
    } else {
      onFilter(data.filter(item => getCategory(item) === category));
    }
  };

  return (
    <div className={styles.filter}>
      {['Все', ...categories].map(cat => (
        <button
          key={cat}
          className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
