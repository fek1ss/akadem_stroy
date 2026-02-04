'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sling as Hamburger } from 'hamburger-react';
import { FiChevronDown } from 'react-icons/fi';

import styles from './styles.module.scss';
import { links } from '@/data/links';
import { HeaderSetting } from '@/components/ui/headerSetting/HeaderSetting';

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // страницы, где header всегда scrolled
  const alwaysScrolled =
    pathname === '/about/projects' ||
    pathname === '/about/clients';

  // state ТОЛЬКО для скролла окна
  const [scrolledByScroll, setScrolledByScroll] = useState(false);

  useEffect(() => {
    if (alwaysScrolled) return;

    const onScroll = () => {
      if (isOpen) return;
      setScrolledByScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [alwaysScrolled, isOpen]);

  // итоговое вычисляемое значение
  const scrolled = alwaysScrolled || scrolledByScroll;

  const toggleDropdown = (label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* LOGO */}
        <div className={`${styles.logo} ${isOpen ? styles.hidden : ''}`}>
          <Image
            src="/images/logo-akadem.png"
            width={100}
            height={60}
            alt="Logo"
            className={styles.logo__img}
          />
          <p className={styles.logo__text}>Академ Строй</p>
        </div>

        {/* HAMBURGER */}
        <div className={styles.hamburgerWrapper}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={scrolled ? '#000' : '#fff'}
          />
        </div>

        {/* NAV */}
        <nav
          className={`${styles.nav} ${
            isOpen ? styles.nav__open : styles.nav__close
          }`}
        >
          {/* LOGO IN MENU */}
          <div
            className={`${styles.logo__menu} ${
              isOpen ? styles.menu__open : styles.menu__close
            }`}
          >
            <Image
              src="/images/logo-black-akadem.png"
              width={100}
              height={60}
              alt="Logo"
            />
          </div>

          {/* LINKS */}
          {links.map(link => (
            <div key={link.label} className={styles.navItemWrapper}>
              {!link.subLinks ? (
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <div
                  className={`${styles.dropdown} ${
                    activeDropdown === link.label
                      ? styles.dropdownActive
                      : ''
                  }`}
                >
                  <button
                    className={styles.navLink}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`${styles.arrowIcon} ${
                        activeDropdown === link.label
                          ? styles.arrowRotate
                          : ''
                      }`}
                    />
                  </button>

                  <div className={styles.dropdownMenu}>
                    {link.subLinks.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={styles.subLink}
                        onClick={() => {
                          setOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* MOBILE SETTINGS */}
          <div className={isOpen ? styles.mobileOnly : styles.hidden}>
            <HeaderSetting />
          </div>
        </nav>

        {/* DESKTOP SETTINGS */}
        <div className={isOpen ? styles.hidden : styles.desktopOnly}>
          <HeaderSetting />
        </div>
      </div>
    </header>
  );
}
