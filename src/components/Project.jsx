import styles from './sass/Project.module.sass';
import enlaceImg from '../img/enlace.png';

const Project = ({ titulo, descripcion, img }) => {
  return (
    <article className={styles.article}>
      <img src={img} alt={titulo} />
      <section className={styles.section}>
        <h4>{titulo}</h4>
        <img src={enlaceImg}></img>
        <p>{descripcion}</p>
      </section>
    </article>
  );
};
export default Project;
