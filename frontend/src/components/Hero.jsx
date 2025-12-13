import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1>WELKOM</h1>
        <p>Op mijn persoonlijke portfolio</p>
        <a href="#projects" className={styles.ctaButton}>
          Bekijk mijn werk
        </a>
      </div>
    </section>
  );
};

export default Hero;