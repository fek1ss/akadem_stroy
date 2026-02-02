'use client';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './styles.module.scss';

interface Props {
  logos: string[];
  activeIndex: number;
}

export function PartnersSlider({ logos, activeIndex }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.slider}>
      <div className={styles.track} ref={trackRef}>
        {logos.map((logo, i) => (
          <div key={i} className={styles.item}>
            <Image src={logo} alt="partner" fill />
          </div>
        ))}
      </div>
    </div>
  );
}
