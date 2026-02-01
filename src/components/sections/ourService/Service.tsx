'use client';

import styles from './styles.module.scss';
import { Line } from './../../ui/line/Line';
import { CardService } from '@/components/ui/cardService/СardService';
import { services } from '@/data';

export function Service() {
  return (
    <div className={styles.services}>
      <h1 className={styles.services__title}>Наши Услуги</h1>
      <Line />
      <div className={styles.services__cards}>
        {services.map(card => (
          <CardService
            key={card.imgSrc}
            title={card.title}
            description={card.description}
            img={card.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
