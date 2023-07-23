import styles from './sass/Header.module.sass';
import personImg from '../img/person.svg';

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#About">Sobre Mi</a>
        <a href="#Main">Proyectos</a>
        <a href="#Contact">Contacto</a>
      </nav>
      <header className={styles.header}>
        <section className={styles.section}>
          <h1>Federico Minatta</h1>
          <h2>Frontend Developer</h2>
        </section>
        <img src={personImg} alt="" />
      </header>
    </>
  );
};
export default Header;
