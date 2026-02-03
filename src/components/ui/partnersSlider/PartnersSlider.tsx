'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

interface Props {
  logos: string[];
  activeIndex: number;
  itemsPerPage: number;
  onChange: (index: number) => void;
}

export function PartnersSlider({ logos, activeIndex, itemsPerPage, onChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  // pagination → scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const itemWidth = track.children[0]?.clientWidth || 0;
    const gap = parseInt(getComputedStyle(track).gap || '0', 10);

    isProgrammaticScroll.current = true;

    track.scrollTo({
      left: activeIndex * (itemWidth + gap) * itemsPerPage,
      behavior: 'smooth',
    });

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 400);
  }, [activeIndex, itemsPerPage]);

  // swipe → pagination
  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;
    const track = trackRef.current;
    if (!track) return;

    const itemWidth = track.children[0]?.clientWidth || 1;
    const gap = parseInt(getComputedStyle(track).gap || '0', 10);
    const pageWidth = (itemWidth + gap) * itemsPerPage;

    const index = Math.round(track.scrollLeft / pageWidth);
    onChange(index);
  };

  return (
    <div className={styles.slider}>
      <div
        ref={trackRef}
        className={styles.track}
        onScroll={handleScroll}
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
