'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Sling as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { links } from '@/data/links';
import { FiPhone, FiChevronDown } from 'react-icons/fi';
import { HeaderSetting } from '@/components/ui/headerSetting/HeaderSetting';

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(!isHome);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      style={{ color: `${scrolled ? '#000' : '#fff'}` }}
    >
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
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={`${scrolled ? '#000' : '#fff'}`}
          />
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
                  className={`${styles.dropdown} ${activeDropdown === link.label ? styles.dropdownActive : ''}`}
                >
                  <button
                    className={styles.navLink}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`${styles.arrowIcon} ${activeDropdown === link.label ? styles.arrowRotate : ''}`}
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

          <div className={`${isOpen ? styles.mobileOnly : styles.hidden}`}>
            <HeaderSetting />
          </div>
        </nav>

        <div className={`${isOpen ? styles.hidden : styles.desktopOnly}`}>
          <HeaderSetting />
        </div>
      </div>
    </header>
  );
}
