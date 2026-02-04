import React from 'react';
import Image from 'next/image'; // Если используете Next.js, иначе обычный <img>
import styles from './styles.module.scss';
import { ClientCardProps } from '@/types/client';

export function ClientCard({ title, img, onOpenModal }: ClientCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <button
          type='button'
          className={styles.button}
          onClick={() => onOpenModal?.(title)}
        >
          Узнать больше
        </button>
      </div>
    </div>
  );
}
