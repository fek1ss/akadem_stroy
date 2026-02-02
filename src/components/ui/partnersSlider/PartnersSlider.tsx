'use client';
import Image from 'next/image';
import styles from './styles.module.scss';

interface Props {
  logos: string[];
  activeIndex: number; 
}

export function PartnersSlider({ logos, activeIndex }: Props) {
  return (
    <div className={styles.slider}>
      <div
        className={styles.track}
        style={{
          transform: `translateX(-${activeIndex * 20}%)`,
        }}
      >
        {logos.map((logo, i) => (
          <div key={i} className={styles.item}>
            <Image src={logo} alt="partner" fill />
          </div>
        ))}
      </div>
    </div>
  );
}
