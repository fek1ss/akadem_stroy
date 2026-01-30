'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhone } from 'react-icons/fi';
import styles from './styles.module.scss';
import { Sling as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О Компании' },
  { href: '/services', label: 'Услуги' },
  { href: '/partners', label: 'Наши Партнеры' },
  { href: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={`${styles.logo} ${isOpen ? styles.hidden : ''}`}>
          <Image
            src='/images/logo-akadem.png'
            width={100}
            height={60}
            alt='Logo'
          />
          <p className={styles.logo__text}>Академ Строй</p>
        </div>

        <div className={styles.hamburgerWrapper}>
          <Hamburger toggled={isOpen} toggle={setOpen} color={'#fff'} />
        </div>

        <nav
          className={`${styles.nav} ${isOpen ? styles.nav__open : styles.nav__close}`}
        >
          <div
            className={`${styles.logo__menu} ${isOpen ? styles.menu__open : styles.menu__close}`}
          >
            <Image
              src='/images/logo-black-akadem.png'
              width={100}
              height={60}
              alt='Logo'
            />
          </div>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={`${isOpen ? styles.hidden : styles.setting}`}>
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
      </div>
    </header>
  );
}
