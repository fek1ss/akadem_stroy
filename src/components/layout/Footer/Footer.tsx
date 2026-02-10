// Footer.tsx
'use client';
import styles from './styles.module.scss';
import Link from 'next/link';
import { Modal } from '@/components/ui/modal/Modal';
import { useState } from 'react';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.container}>
          {/* Навигация */}
          <div className={styles.column}>
            <h4 className={styles.title}>НАВИГАЦИЯ</h4>
            <ul className={styles.list}>
              <Link href='/' className={styles.link}>
                ГЛАВНАЯ
              </Link>
              <Link href='/about/clients'>НАШИ КЛИЕНТЫ</Link>
              <Link href='/about/projects'>НАШИ ПРОЕКТЫ</Link>
            </ul>
          </div>

          {/* Услуги */}
          <div className={styles.column}>
            <h4 className={styles.title}>УСЛУГИ</h4>
            <ul className={styles.list}>
              <Link href='/services/low-current'>СЛАБОТОЧНАЯ СЕТЬ</Link>
              <Link href='/services/conditioning'>КОНДИЦИОНИРОВАНИЕ</Link>
              <Link href='/services/ventilation'>ВЕНТИЛЯЦИЯ</Link>
            </ul>
          </div>

          {/* Контакты */}
          <div className={styles.column}>
            <h4 className={styles.title}>МЫ НА СВЯЗИ</h4>
            <div className={styles.contacts}>
              <a href='mailto:info@akademstroy.kz' className={styles.text}>
                info@akademstroy.kz
              </a>
              <a href='tel:+77087778888' className={styles.text}>
                +7 (708) 434 36 90
              </a>
              <a href='tel:+77087778888' className={styles.text}>
                +7 (777) 565 06 55
              </a>
            </div>
          </div>

          {/* Кнопка */}
          <div className={styles.column}>
            <button className={styles.button} onClick={openModal}>
              ЗАКАЗАТЬ РАСЧЕТ
            </button>
          </div>
        </div>

        {/* Нижняя линия и копирайт */}
        <div className={styles.bottom}>
          <hr className={styles.line} />
          <p className={styles.copy}>akademstroy.kz</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
}
