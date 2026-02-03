'use client';

import styles from './styles.module.scss';
import HeroBase from './../../ui/heroBase/HeroBase';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroBase
        title='Академ строй'
        description='Наш капитал - репутация'
        video={true}
        img=''
      />
    </section>
  );
}
