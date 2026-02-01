'use client';

import { TransitionBtnProps } from '@/types';
import styles from './styles.module.scss';
import { FiArrowRight } from 'react-icons/fi';

export function TransitionBtn({
  text,
  btn = false,
  color,
}: TransitionBtnProps) {
  return (
    <button
      className={`${styles.transition} ${btn ? styles.transitionBtn : styles.transitionText}`}
      style={{ color: color }}
    >
      {text}
      <FiArrowRight className={styles.hero__arrow} />
    </button>
  );
}
