'use client';

import { useState, useEffect } from 'react';
import { partners } from '@/data';
import { PartnersSlider } from '@/components/ui/partnersSlider/PartnersSlider';
import { DotsPagination } from '@/components/ui/dotsPagination/DotsPagination';
import styles from './styles.module.scss';

export function PartnersSection() {
  const [active, setActive] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth <= 768 ? 2 : 5);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.ceil(partners.length / itemsPerPage);

  return (
    <section className={styles.partners}>
      <PartnersSlider
        logos={partners}
        activeIndex={active}
        itemsPerPage={itemsPerPage}
        onChange={setActive}
      />

      <DotsPagination
        currentIndex={active}
        total={totalPages}
        onChange={setActive}
      />
    </section>
  );
}
