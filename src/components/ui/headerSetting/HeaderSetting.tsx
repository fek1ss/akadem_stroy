import { FiPhone } from 'react-icons/fi';
import styles from './styles.module.scss';

export function HeaderSetting() {
  return (
    <div className={styles.setting}>
      <div className={styles.lang}>
        <span>RU</span>/<span>EN</span>
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
