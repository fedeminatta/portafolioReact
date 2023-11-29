import styles from './sass/Project.module.sass';
import enlaceImg from '../img/enlace.png';

const Project = ({ titulo, children, img, url }) => {
    return (
        <article className={styles.article}>
            <img className={styles.heroImg} src={img} alt={titulo} />
            <section className={styles.section}>
                <h4>{titulo}</h4>
                <a href={url} target="_blank" rel="noreferrer">
                    <img className={styles.enlace} src={enlaceImg}></img>
                </a>
                <section className={styles.iconos}>{children}</section>
            </section>
        </article>
    );
};
export default Project;
