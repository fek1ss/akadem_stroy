'use client';

import styles from './styles.module.scss';
import { DiscussForm } from '@/components/ui/discussForm/DiscussForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label='Закрыть модальное окно'
        >
          &times;
        </button>

        <div className={styles.modalInner}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>ЗАКАЗАТЬ УСЛУГУ</h2>
            <div className={styles.divider} />
            <p className={styles.modalSubtitle}>
              КАЧЕСТВЕННЫЕ ПРОЕКТЫ НАЧИНАЮТСЯ С ЗАПОЛНЕНИЯ ЭТОЙ ФОРМЫ
            </p>
          </div>

          <DiscussForm />

          <p className={styles.modalFooterText}>
            Нажимая кнопку «Заказать расчет», я соглашаюсь на обработку моих персональных данных
          </p>
        </div>
        
      </div>
    </div>
  );
}