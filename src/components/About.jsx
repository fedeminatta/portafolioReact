import { Slide } from 'react-awesome-reveal';
import styles from './sass/About.module.sass';
import cv from './es-cv-federico-minatta.pdf';

const About = () => {
	const descripcion = `
  ¡Saludos! 👋
  
  Soy Federico Minatta, un Desarrollador Front End con una inclinación autodidacta hacia el aprendizaje. 
  Mi trayectoria se ha construido en gran parte mediante cursos y la creación de diversos proyectos, algunos de los cuales presento en este portafolio, mientras que otros aún no han sido incluidos aquí.
  
  Cada día, busco desafiarme a mí mismo para adquirir nuevos conocimientos. 
  Mi compromiso con el crecimiento me impulsa a seguir capacitándome en todos los ámbitos que abarco, con el objetivo de perfeccionarme como desarrollador y generar experiencias web aún más impresionantes. 🚀`;
	return (
		<section className={styles.section} id='About'>
			<Slide direction='up' triggerOnce>
				<article>
					<section>
						<h3>Sobre Mi</h3>
						<a href={cv} download={true}>
							Descargar CV
						</a>
					</section>
					<p>{descripcion}</p>
				</article>
			</Slide>
		</section>
	);
};
export default About;
