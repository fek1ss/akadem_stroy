'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
import { Line } from '../line/Line';
import { ProjectCardProps } from '@/types';

export function ProjectCard({
  title,
  description,
  year,
  image,
  isWide = false,
}: ProjectCardProps) {
  return (
    <div className={`${styles.card} ${isWide ? styles.card_wide : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill // Позволяет картинке занять всю площадь родителя (340px или 462px)
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <Line />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.year}>ГОД РЕАЛИЗАЦИИ: {year}</p>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
}