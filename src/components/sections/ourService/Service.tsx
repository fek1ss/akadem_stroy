'use client';

import styles from './styles.module.scss';
import { CardService } from '@/components/ui/cardService/СardService';
import { services } from '@/data';
import { Title } from './../../ui/title/Title';
import { motion } from 'framer-motion';


export function Service() {
  return (
    <motion.div
      className={styles.services}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}  
    >
      <Title text='Наши услуги' color='#000' />
      <div className={styles.services__cards}>
        {services.map(card => (
          <CardService
            key={card.imgSrc}
            title={card.title}
            description={card.description}
            img={card.imgSrc}
            link={card.link}
          />
        ))}
      </div>
    </motion.div>
  );
}
