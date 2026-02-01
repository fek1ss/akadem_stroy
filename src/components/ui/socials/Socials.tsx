import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Socials() {
  return (
    <div className={styles.socials}>
      <a
        href='https://www.instagram.com/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'
      >
        <FaInstagram size={32} color='#E4405F' />
      </a>

      <a
        href='https://wa.me/77084343690'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='WhatsApp'
      >
        <FaWhatsapp size={32} color='#25D366' />
      </a>
    </div>
  );
}
