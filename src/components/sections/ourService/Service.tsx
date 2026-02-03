'use client';

import styles from './styles.module.scss';
import { CardService } from '@/components/ui/cardService/СardService';
import { services } from '@/data';
import { Title } from './../../ui/title/Title';

export function Service() {
  return (
    <div className={styles.services}>
      <Title text="Наши услуги" color='#000' />
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
