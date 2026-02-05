import { FiPhone } from 'react-icons/fi';
import styles from './styles.module.scss';

export function HeaderSetting() {
  return (
    <div className={styles.setting}>
      <div className={styles.lang}>
        <button onClick={() => window.location.reload()}>RU</button>/
        <button
          onClick={() => {
            const select = document.querySelector(
              '.goog-te-combo',
            ) as HTMLSelectElement;

            if (select) {
              select.value = 'en';
              select.dispatchEvent(new Event('change'));
            }
          }}
        >
          EN
        </button>
      </div>

      <div className={styles.phone}>
        <FiPhone className={styles.phoneIcon} />
        <div className={styles.number}>
          <a href='tel:+77084343690'>+7 (708) 434 36 90</a>
          <a href='tel:+77084343690'>+7 (777) 565 06 55</a>
        </div>
      </div>
    </div>
  );
}
