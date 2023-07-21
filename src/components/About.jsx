import styles from './sass/About.module.sass';

const About = () => {
  const descripcion = `Bienvenido 👋

  Mi nombre es Federico Minatta y soy Desarrollador Front End.

  Mi aprendizaje fue en su mayoría de manera autodidacta, he tomado varios cursos y creado muchos proyectos (tanto los que muestro en este portafolio como otros que no están acá). Busco la manera de retarme todos los días a aprender algo nuevo.
  Actualmente me sigo capacitando en todos los sectores que manejo para mejorar como desarrollador y poder crear mejores sitios.🚀`;
  return (
    <section className={styles.section} id="About">
      <article>
        <h3>Sobre Mi</h3>
        <p>{descripcion}</p>
      </article>
    </section>
  );
};
export default About;
