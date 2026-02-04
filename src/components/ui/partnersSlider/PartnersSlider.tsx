'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { PartnersProps } from '@/types';


export function PartnersSlider({
  logos,
  activeIndex,
  itemsPerPage,
  onChange,
}: PartnersProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const isProgrammatic = useRef(false);

  /* ---------- pagination → move ---------- */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const itemWidth = track.children[0]?.clientWidth || 0;
    const gap = parseInt(getComputedStyle(track).gap || '0', 10);
    const pageWidth = (itemWidth + gap) * itemsPerPage;

    isProgrammatic.current = true;

    if (isMobile) {
      track.scrollTo({
        left: activeIndex * pageWidth,
        behavior: 'smooth',
      });
    } else {
      track.style.transform = `translateX(-${activeIndex * pageWidth}px)`;
    }

    setTimeout(() => {
      isProgrammatic.current = false;
    }, 400);
  }, [activeIndex, itemsPerPage, isMobile]);

  /* ---------- swipe → pagination (mobile only) ---------- */
  const handleScroll = () => {
    if (!isMobile || isProgrammatic.current) return;

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
