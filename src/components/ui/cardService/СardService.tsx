'use client'

import { ServicesProps } from '@/types';
import styles from './styles.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export function CardService({ title, description, img, link }: ServicesProps) {
  const router = useRouter();

  return (
    <div className={styles.card} onClick={()=>router.push(link)}>
      <Image src={img} width={100} height={100} alt={title} />
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__desc}>{description}</p>
    </div>
  );
};

