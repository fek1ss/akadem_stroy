'use client';
import { useRef } from 'react';
import { certificates } from '@/data';
import styles from './styles.module.scss';
import {
  CertificatesStack,
  CertificatesStackRef,
} from '@/components/ui/certificatesStack/CertificatesStack';
import { Line } from './../../ui/line/Line';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function CertificatesSection() {
  const stackRef = useRef<CertificatesStackRef>(null);

  return (
    <section className={styles.certificates}>
      <div className={styles.certificates__wrapper}>
        <CertificatesStack
          ref={stackRef}
          images={certificates}
        />

        <div className={styles.info}>
          <div className={styles.title}>
            <h2>СЕРТИФИКАТЫ И СВИДЕТЕЛЬСТВА</h2>
            <Line />
          </div>

          <p>
            Документальное подтверждение нашей квалификации и гарантия высокого
            качества работ.
          </p>

          <div className={styles.controls}>
            <button onClick={() => stackRef.current?.prev()}>
              <FiChevronLeft />
            </button>
            <button onClick={() => stackRef.current?.next()}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
