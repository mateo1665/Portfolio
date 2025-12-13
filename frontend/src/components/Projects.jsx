import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  const projectList = [
    {
      title: "Mijn Portfolio",
      description: "De website waar je nu op kijkt. Gebouwd met React en SCSS.",
      tags: ["React", "SCSS", "Design"],
      link: "#", 
      github: "#"
    },
    {
      title: "School Dashboard",
      description: "Een data-dashboard gemaakt voor mijn opleiding.",
      tags: ["JavaScript", "HTML", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      title: "Juric Promet",
      description: "Een website voor me oom die een transport en detailing bedrijf heeft.",
      tags: ["Node.js", "React","PostgreSQL","CSS","Express.js"],
      link: "#",
      github: "#"
    }
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mijn <span className={styles.highlight}>Projecten</span></h2>
        
        <div className={styles.grid}>
          {projectList.map((project, index) => (
            <div 
              key={index} 
              ref={addToRefs} 
              className={styles.card}
              style={{ transitionDelay: `${index * 100}ms` }} 
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={project.link} className={styles.btnLink}>Bekijk Live</a>
                <a href={project.github} className={styles.btnLink}>GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;