'use client';

import styles from './styles.module.scss';

type Props = {
  message: string;
  onClose: () => void;
};

export function Toast({ message, onClose }: Props) {
  return (
    <div className={styles.toast} onClick={onClose}>
      {message}
    </div>
  );
}
