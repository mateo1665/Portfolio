import React, { useEffect, useRef } from 'react';
import styles from './About.module.scss';

const About = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.timelineContainer}>
        
        <div className={styles.centerLine}></div>
        <div ref={addToRefs} className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.content}>
            <h2>Over <span className={styles.highlight}>Mij</span></h2>
            <p>
              Hoi! Ik ben Mateo, een 21-jarige Software Developer in opleiding (MBO 4). 
              Wat begon als interesse, is uitgegroeid tot een missie: websites bouwen die impact maken.
            </p>
            <p>
              Ik zoek altijd naar de volgende uitdaging. Mijn doel is om van niets iets groots te maken, 
              zowel voor mezelf als voor mijn klanten.
            </p>
          </div>
        </div>

        <div ref={addToRefs} className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.content}>
            <h3>Huidige Focus</h3>
            <p>Momenteel bouw ik moderne websites en applicaties.
                Dit zijn ook de talen waar ik mee heb gewerkt en natuurlijk meer uit wil halen en leren.
            </p>
            <div className={styles.skillGrid}>
              <span className={styles.skillTag}>HTML & CSS</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>React</span>
              <span className={styles.skillTag}>Sass</span>
              <span className={styles.skillTag}>MysSQL</span>
              <span className={styles.skillTag}>PostgreSQL</span>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>Laravel</span>
              <span className={styles.skillTag}>C#</span>
              <span className={styles.skillTag}>Node.js</span>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.content}>
            <h3>Toekomstvisie</h3>
            <ul className={styles.timelineList}>
              <li>
                <span className={styles.date}>2025/26</span>
                <strong>Full Stack Web Development,MBO afronden en bedrijfje opzetten</strong>
                <p>Het fundament leggen met strakke code en design. Daar ben ik vooral mee bezig wil veel leren ik heb zelfs al klanten waarmee ik bezig ben.
                    Daarnaast gebruik ik nu AI en me mentor om hulp om dingen uit te leggen want me doel is zelf code leren schrijven en verbeteren en uitlezen,
                    Waardoor ik er proffecioneel uitstraal in de toekomst voor mij klanten en voor mezelf natuurlijk.
                    En data analyse en Cybersecurity gaan nu ook in me projecten komen van mijn klanten zodat ik op elk flank uitbreid tot iets groots voor mezelf
                </p>
              </li>
              <li>
                <span className={styles.date}>2026/27</span>
                <strong>Bedrijf op rolletjes en HBO beginnen</strong>
                <p>Ik wil over een jaartje wat verdient hebben naast me school en me opleiding daardoor kan ik het hopelijk laten versnellen en kan laten zien dat ik echt proffecioneel bezig ben.
                    Zodat ik daar natuurlijk me diploma haal en veel kan leren van docenten die daar zitten om mij naar de volgende stap te werkenS
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;