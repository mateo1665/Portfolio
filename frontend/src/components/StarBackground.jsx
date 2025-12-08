import React from 'react';
import styles from './StarBackground.module.scss';

const StarBackground = () => {
  return (
    <div className={styles.starWrapper}>
      <div className={styles.starsSmall}></div>
      <div className={styles.starsMedium}></div>
      <div className={styles.starsLarge}></div>
    </div>
  );
};

export default StarBackground;