import styles from './sass/Tools.module.sass';

// imagenes
import reactImg from '../img/tecnologias/react.png';
import viteImg from '../img/tecnologias/vite.webp';
import jsImg from '../img/tecnologias/js.png';
import tailwindImg from '../img/tecnologias/tailwind.png';
import sassImg from '../img/tecnologias/sass.png';
import htmlImg from '../img/tecnologias/html.png';
import gitImg from '../img/tecnologias/git.png';
import cssImg from '../img/tecnologias/css.png';
//
const Tools = () => {
  return (
    <section className={styles.section} id="tools">
      <h3>Tecnologías</h3>
      <article className={styles.article}>
        <div className={styles.item}>
          <img className={styles.react} src={reactImg} alt="React" />
          <p>React</p>
        </div>
        <div className={styles.item}>
          <img className={styles.vite} src={viteImg} alt="Vite" />
          <p>Vite</p>
        </div>
        <div className={styles.item}>
          <img className={styles.javascript} src={jsImg} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className={styles.item}>
          <img className={styles.tailwind} src={tailwindImg} alt="Tailwind" />
          <p>Tailwind</p>
        </div>
        <div className={styles.item}>
          <img className={styles.sass} src={sassImg} alt="SASS" />
          <p>SASS</p>
        </div>
        <div className={styles.item}>
          <img className={styles.git} src={gitImg} alt="GIT" />
          <p>GIT</p>
        </div>
        <div className={styles.item}>
          <img className={styles.html} src={htmlImg} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className={styles.item}>
          <img className={styles.css} src={cssImg} alt="CSS" />
          <p>CSS</p>
        </div>
      </article>
    </section>
  );
};
export default Tools;
