import styles from './sass/Sidebar.module.sass';
import linkedinIcon from '../img/linkedin.svg';
import emailIcon from '../img/email.svg';
import githubIcon from '../img/github.svg';
import { Slide } from 'react-awesome-reveal';

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <Slide cascade direction="right" damping={0.2}>
        <a
          href="https://www.linkedin.com/in/federico-minatta-579a6b227/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="" />
        </a>
        <a href="#Contact">
          <img src={emailIcon} alt="" />
        </a>
        <a
          href="https://github.com/fedeminatta"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="" />
        </a>
      </Slide>
    </aside>
  );
};
export default Sidebar;
