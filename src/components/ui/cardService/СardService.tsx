'use client'

import styles from './styles.module.scss';
import Image from 'next/image';
import { cardProps } from '@/types';


export function CardService({ title, description, img }: cardProps) {
  return (
    <div className={styles.card}>
      <Image src={img} width={100} height={100} alt={title} />
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__desc}>{description}</p>
    </div>
  );
};

