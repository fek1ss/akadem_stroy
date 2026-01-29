'use client';

import styles from './styles.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src='/videos/back-akadem.MP4'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
      />
      <div className={styles.overlay}></div>
    </section>
  );
}
