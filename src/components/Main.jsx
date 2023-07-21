import styles from './sass/Main.module.sass';
import Project from './Project';

import proyectos from './proyectos';

const Projects = () => {
  return (
    <main className={styles.main} id="Main">
      <h2>Projectos</h2>
      <section>
        {proyectos.map((proyecto) => (
          <Project
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            img={proyecto.img}
          />
        ))}
      </section>
    </main>
  );
};
export default Projects;
