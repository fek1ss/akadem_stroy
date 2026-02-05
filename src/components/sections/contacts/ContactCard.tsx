import styles from './styles.module.scss';
import { FiMapPin, FiClock, FiMail, FiPhone } from 'react-icons/fi';

type Props = {
  address: string;
  schedule: string;
  email: string;
  phone: string;
};

export function ContactCard({ address, schedule, email, phone }: Props) {
  return (
    <div className={styles.card}>
      <h1>
        {
          email.includes('astana') && "Astana" ||
          email.includes('almaty') && "Almaty" ||
          email.includes('info') && "Uralks" 
        }
      </h1>
      <div className={styles.card__row}>
        <FiMapPin size={25} className={styles.icon} />
        <div className={styles.info}>
          <h3>Адрес:</h3>
          <p>{address}</p>
        </div>
      </div>

      <div className={styles.card__row}>
        <FiClock size={25} className={styles.icon} />
        <div className={styles.info}>
          <h3>График работы:</h3>
          <p>{schedule}</p>
        </div>
      </div>

      <div className={styles.card__row}>
        <FiMail size={25} className={styles.icon} />
        <div className={styles.info}>
          <h3>Почта:</h3>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>

      <div className={styles.card__row}>
        <FiPhone size={25} className={styles.icon} />
        <div className={styles.info}>
          <h3>Телефон:</h3>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}
