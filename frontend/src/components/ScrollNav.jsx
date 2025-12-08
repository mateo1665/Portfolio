import React, { useState, useEffect } from 'react';
import styles from './ScrollNav.module.scss';

const ScrollNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
      
      if (window.scrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.scrollNav}>
      <div className={styles.line}></div>

      {sections.map((item) => (
        <a 
          key={item} 
          href={`#${item}`}
          className={`${styles.dot} ${activeSection === item ? styles.active : ''}`}
        >
          <span className={styles.tooltip}>{item}</span>
        </a>
      ))}
    </div>
  );
};

export default ScrollNav;