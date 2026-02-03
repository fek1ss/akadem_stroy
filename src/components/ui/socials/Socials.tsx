import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './styles.module.scss';
import { AKADEM_STROY } from '@/constants';
import { INSTA } from '@/constants/socials';

export function Socials() {
  return (
    <div className={styles.socials}>
      <a
        href={INSTA}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'
      >
        <FaInstagram size={40} color='#E4405F' />
      </a>

      <a
        href={`https://wa.me/${AKADEM_STROY}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='WhatsApp'
      >
        <FaWhatsapp size={40} color='#25D366' />
      </a>
    </div>
  );
}
