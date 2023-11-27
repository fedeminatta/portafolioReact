import styles from './sass/Header.module.sass';
import personImg from '../img/person.png';
import { Fade, Slide } from 'react-awesome-reveal';

const Header = () => {
    return (
        <>
            <nav className={styles.nav}>
                <Fade cascade damping={0.3}>
                    <a href="#About">Sobre Mi</a>
                    <a href="#Main">Proyectos</a>
                    <a href="#Contact">Contacto</a>
                </Fade>
            </nav>
            <header className={styles.header}>
                <section className={styles.section}>
                    <Slide cascade damping={0.2}>
                        <h1>Federico Minatta</h1>
                        <h2>Frontend Developer</h2>
                    </Slide>
                </section>
                <Slide direction="right" triggerOnce>
                    {' '}
                    <img src={personImg} alt="" />{' '}
                </Slide>
            </header>
        </>
    );
};
export default Header;
