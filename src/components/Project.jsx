import styles from './sass/Project.module.sass';
import enlaceImg from '../img/enlace.png';

const Project = ({ titulo, descripcion, img, url }) => {
  return (
    <article className={styles.article}>
      <img src={img} alt={titulo} />
      <section className={styles.section}>
        <h4>{titulo}</h4>
        <a href={url} target="_blank">
          <img src={enlaceImg}></img>
        </a>
        <p>{descripcion}</p>
      </section>
    </article>
  );
};
export default Project;
