import React, { useEffect, useRef } from 'react';
import styles from './Goals.module.scss';

const Goals = () => {
  const roadmap = [
    {
      year: "2025",
      title: "School & voor mezelf",
      items: [
        "Voor mezelf beginnen",
        "Eerste project af en portfolio ",
        "Met klanten beginnen te werken voor nieuwjaar",
      ]
    },
    {
      year: "2026",
      title: "School & Onderneming beginnen",
      items: [
        "MBO 4 afronden",
        "Verdiepen in Data Analyse",
        "Verdiepen in Cyber Sequirity",
        "Beginnen met editen",
        "Eerste omzet maken",
        "Beginnen met me HBO"
      ]
    },
    {
      year: "2027+",
      title: "School & Ondernemen",
      items: [
        "Me onderneming met websites bouwen verder uitbreiden",
        "HBO groot prioriteit maken",
        "Beginnen met fotograferen",
        "Me eerste auto kopen",
        "Veel mogelijk projecten maken en afronden voor me onderneming"
      ]
    }
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.2 });

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section id="goals" className={styles.goalsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mijn <span className={styles.highlight}>Roadmap</span></h2>
        
        <div className={styles.timeline}>
          <div className={styles.line}></div>

          {roadmap.map((block, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.dot}></div>
              
              <div className={styles.yearBox}>
                <span className={styles.year}>{block.year}</span>
              </div>

              <div className={styles.content}>
                <h3>{block.title}</h3>
                <ul className={styles.goalList}>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Goals;