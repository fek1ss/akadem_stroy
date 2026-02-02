// Footer.tsx
'use client';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.container}>
          {/* Навигация */}
          <div className={styles.column}>
            <h4 className={styles.title}>НАВИГАЦИЯ</h4>
            <ul className={styles.list}>
              <li>ГЛАВНАЯ</li>
              <li>О КОМПАНИИ</li>
              <li>НАШИ ПАРТНЕРЫ</li>
            </ul>
          </div>

          {/* Услуги */}
          <div className={styles.column}>
            <h4 className={styles.title}>УСЛУГИ</h4>
            <ul className={styles.list}>
              <li>СЛАБОТОЧНАЯ СЕТЬ</li>
              <li>ВОДОСТОЧНЫЕ СИСТЕМЫ</li>
              <li>ВЕНТИЛЯЦИЯ И КОНДИЦИОНИРОВАНИЕ</li>
            </ul>
          </div>

          {/* Контакты */}
          <div className={styles.column}>
            <h4 className={styles.title}>МЫ НА СВЯЗИ</h4>
            <div className={styles.contacts}>
              <p className={styles.text}>info@academstroy.kz</p>
              <p className={styles.text}>+7 (708) 777 88 88</p>
              <p className={styles.text}>+7 (708) 777 88 88</p>
            </div>
          </div>

          {/* Кнопка */}
          <div className={styles.column}>
            <button className={styles.button}>ЗАКАЗАТЬ РАСЧЕТ</button>
          </div>
        </div>

        {/* Нижняя линия и копирайт */}
        <div className={styles.bottom}>
          <hr className={styles.line} />
          <p className={styles.copy}>academstroy.kz</p>
        </div>
      </div>
    </footer>
  );
}
