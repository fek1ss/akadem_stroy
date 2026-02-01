'use client';

import styles from './styles.module.scss';
import { FiArrowRight } from 'react-icons/fi';


export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src='/videos/background-hero.MP4'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
      />
      <div className={styles.hero__text}>
        <div className={styles.hero__title}>
          <h1>Академ Строй</h1>
          <p>Наш капитал - репутация!</p>
        </div>
        <button className={styles.hero__call}>
          Cвязаться с нами
          <FiArrowRight className={styles.hero__arrow} />
        </button> 
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
}
