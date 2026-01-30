'use client'

import styles from './styles.module.scss';
import Image from 'next/image';

type cardProps = {
  title: string;
  description: string;
  img: string;
};

export function CardService({ title, description, img }: cardProps) {
  return (
    <div className={styles.card}>
      <Image src={img} width={100} height={100} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

