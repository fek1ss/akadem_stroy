'use client';

import styles from './styles.module.scss';
import { TransitionBtn } from './../../ui/transitionBtn/TransitionBtn';
import { SiTruenas } from 'react-icons/si';


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
        <TransitionBtn text="Связаться с нами" btn={true} color='#000' />
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
}
