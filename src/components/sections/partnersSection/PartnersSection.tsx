'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import { partners } from '@/data';
import { PartnersSlider } from '@/components/ui/partnersSlider/PartnersSlider';
import { DotsPagination } from '@/components/ui/dotsPagination/DotsPagination';

export function PartnersSection() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.partners}>
      <PartnersSlider logos={partners} activeIndex={active} />

      <DotsPagination
        currentIndex={active}
        total={partners.length}
        onChange={setActive}
      />
    </section>
  );
}
