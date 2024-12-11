import React from 'react'
import Styles from './ProjectStyles.module.css'
import Viber from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
  <section id='projects' className={Styles.container}>
  <h1 className={Styles.sectionTitle}>Projects</h1>
  <div className={Styles.projectsContainer}>
   <ProjectCard  
   src={Viber} 
   link="https://github.com/Ade-mir/company-landing-page-2"
    h3="Viber"
    p="Streaming App"
    />

<ProjectCard  
   src={freshBurger} 
   link="https://github.com/Ade-mir/company-landing-page-2"
    h3="Fresh Burger"
    p="Hamburger Restaurent"
    />
    <ProjectCard  
   src={hipsster} 
   link="https://github.com/Ade-mir/company-landing-page-2"
    h3="Hipsster"
    p="Glasses Shop"
    />
    <ProjectCard  
   src={fitLift} 
   link="https://github.com/Ade-mir/company-landing-page-2"
    h3="FiT Lift"
    p="Fittness App"
    />
  </div>
  </section>
  );
}

export default Projects;
