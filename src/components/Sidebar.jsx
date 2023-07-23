import styles from './sass/Sidebar.module.sass';
import linkedinIcon from '../img/linkedin.svg';
import emailIcon from '../img/email.svg';
import githubIcon from '../img/github.svg';

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <a
        href="https://www.linkedin.com/in/federico-minatta-579a6b227/"
        target="_blank"
      >
        <img src={linkedinIcon} alt="" />
      </a>
      <a href="#Contact">
        <img src={emailIcon} alt="" />
      </a>
      <a href="https://github.com/fedeminatta" target="_blank">
        <img src={githubIcon} alt="" />
      </a>
    </aside>
  );
};
export default Sidebar;
