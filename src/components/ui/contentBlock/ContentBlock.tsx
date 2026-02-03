'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
import { ContentBlockProps } from '@/types';
import { Title } from './../title/Title';

export function ContentBlock({
  title,
  description,
  image,
  additionalText = '',
}: ContentBlockProps) {
  return (
    <div className={styles.content}>
      <Image
        src={image}
        width={520}
        height={520}
        alt='image about us'
        className={styles.content__img}
      />
      <div className={styles.content__info}>
        <Title text={title} color='#000' />
        <div className={styles.content__text}>
          <p className={styles.content__description}>{description}</p>
          {additionalText && (
            <p className={styles.content__description}>{additionalText}</p>
          )}
        </div>
      </div>
    </div>
  );
}
