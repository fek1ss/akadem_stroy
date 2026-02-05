'use client';

import styles from './styles.module.scss';
import { HeroProps } from '@/types';
import Image from 'next/image';
import { TransitionBtn } from '../transitionBtn/TransitionBtn';
import { scrollToDiscuss } from '@/utils/scrollToDiscuss';

export default function HeroBase({
  title,
  description,
  img,
  video = false,
}: HeroProps) {
  

  return (
    <div className={styles.hero}>
      {video ? (
        <video
          className={styles.video}
          src="/videos/background-hero.MP4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : (
        <Image
          src={img}
          alt="image"
          fill
          className={styles.hero__img}
          style={{ objectFit: 'cover' }}
        />
      )}

      <div className={styles.hero__text}>
        <div className={styles.hero__title}>
          <h1>{title}</h1>
          <p className={styles.hero__desc}>{description}</p>
        </div>

        <TransitionBtn
          text="Связаться с нами"
          btn={false}
          color="#fff"
          onClick={scrollToDiscuss}
        />
      </div>

      <div className={styles.overlay}></div>
    </div>
  );
}
