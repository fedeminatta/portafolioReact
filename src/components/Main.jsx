import styles from './sass/Main.module.sass';
import Project from './Project';
import ShowMoreBtn from './ShowMoreBtn';
import proyectos from './proyectos';

import { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.container}>
      <main
        className={styles.main}
        id="Main"
        style={{
          maxHeight: `${showMore == true ? 'none' : '880px'}`,
        }}
      >
        <h2>Proyectos</h2>
        <section>
          {proyectos.map((proyecto) => (
            <Project
              key={proyecto.id}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              img={proyecto.img}
              url={proyecto.url}
            />
          ))}
        </section>
      </main>

      <ShowMoreBtn
        text={showMore == false ? 'Mostrar más' : 'Mostrar menos'}
        setShowMore={setShowMore}
        showMore={showMore}
      />
    </div>
  );
};

export default Projects;
