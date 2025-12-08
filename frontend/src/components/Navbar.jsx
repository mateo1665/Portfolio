import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.accent}>Mateo</span> Vukoje
      </div>

      <ul className={styles.navLinks}>
        <li><a href="#about">Over Mij</a></li>
        <li><a href="#projects">Projecten</a></li>
        <li><a href="#goals">Doelen</a></li>
        <li><a href="#contact" className={styles.contactBtn}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;