'use client';
import styles from './styles.module.scss';

interface DotsPaginationProps {
  currentIndex: number;        // текущий активный слайд/страница
  total: number;               // общее количество слайдов/страниц
  onChange: (index: number) => void; // функция для смены страницы
}

export function DotsPagination({ currentIndex, total, onChange }: DotsPaginationProps) {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`${styles.dot} ${currentIndex === i ? styles.active : ''}`}
          onClick={() => onChange(i)}
          aria-label={`dot-${i}`}
        />
      ))}
    </div>
  );
}
