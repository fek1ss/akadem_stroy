'use client';
import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

export interface CertificatesStackRef {
  next: () => void;
  prev: () => void;
}

interface Props {
  images: string[];
}

export const CertificatesStack = forwardRef<CertificatesStackRef, Props>(
  ({ images }, ref) => {
    const [active, setActive] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const next = () => {
      setActive(prev => (prev + 1) % images.length);
    };

    const prev = () => {
      setActive(prev => (prev - 1 + images.length) % images.length);
    };

    useImperativeHandle(ref, () => ({
      next,
      prev,
    }));

    const onTouchStart = (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;

      const deltaX = e.changedTouches[0].clientX - touchStartX.current;

      if (Math.abs(deltaX) > 50) {
        deltaX < 0 ? next() : prev();
      }

      touchStartX.current = null;
    };

    return (
      <div className={styles.stack}>
        <div
          className={styles.stackArea}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.map((src, i) => {
            const position = (i - active + images.length) % images.length;
            if (position > 2) return null;

            return (
              <div key={src} className={styles.card} data-pos={position}>
                <Image src={src} alt="certificate" fill />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CertificatesStack.displayName = 'CertificatesStack';
