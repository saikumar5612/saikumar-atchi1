
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/my-img.png';
import sun from '../../assets/sun.svg'; 
import moon from '../../assets/moon.svg';
//import themeIcon from '../../assets/sun.svg'
//import linkedinIcon from '../../assets/linkedin-light.svg'
//import githubIcon from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';

import cv from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';
function Hero() {
    const{theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (<section id ="hero" className={styles.container}>

        <div className={styles.colorModeContainer}>
            <img className={styles.hero} 
            src={heroImg} 
            alt="Profile picture of Saikumar atchi" />

            <img className= {styles.colorMode} src={themeIcon} alt="color mode icon"
            onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Saikumar 
                <br/>
                Atchi
            </h1>
            <h2>
                Software Developer 
            </h2>
            <span>
                <a href="http://www.linkedin.com/in/saikumar-atchi-19875b170" target ="_blank">
                <img src={linkedinIcon} alt="Linkedin icon " />
                </a>
                <a href="https://github.com/saikumaratchi" target ="_blank">
                <img src={githubIcon} alt="Github icon" />
                </a>
              
            </span>
            <p className={styles.description}> 
                with a passion for modern web apps for commercial business.
            </p>
            <a href={cv} download>
              <button className={styles.hover}>Resume</button>
            </a>

        </div>
    </section>
    );
  
}

export default Hero;
