import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1>WELKOM</h1>
        <p>Op mijn persoonlijke portfolio</p>
        <button className={styles.ctaButton}>Bekijk mijn werk</button>
      </div>
    </section>
  );
};

export default Hero;