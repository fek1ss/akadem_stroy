import styles from './styles.module.scss';
import {
  FiMapPin,
  FiClock,
  FiMail,
  FiPhone,
} from 'react-icons/fi';

type Props = {
  address: string;
  schedule: string;
  email: string;
  phone: string;
};

export function ContactCard({
  address,
  schedule,
  email,
  phone,
}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.item}>
        <FiMapPin />
        <p>{address}</p>
      </div>

      <div className={styles.item}>
        <FiClock />
        <p>{schedule}</p>
      </div>

      <div className={styles.item}>
        <FiMail />
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      <div className={styles.item}>
        <FiPhone />
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
    </div>
  );
}
