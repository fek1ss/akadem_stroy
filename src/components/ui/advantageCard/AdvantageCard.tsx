'use client';
import { cardProps } from '@/types';
import styles from './styles.module.scss';  
import Image from 'next/image';

export function AdvantageCard({ title, description, img }: cardProps) {
  return (
    <div className={styles.card}>
      <Image src={img} width={80} height={80} alt={title} />
      <div className={styles.card__info}>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__desc}>{description}</p>
      </div>
    </div>
  );
}
