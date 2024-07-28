import styles from './sass/Main.module.sass';
import Project from './Project';
import ShowMoreBtn from './ShowMoreBtn';
import Proyectos from './proyectos';

import { useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import Iconos from './Iconos';

const Projects = () => {
	const [showMore, setShowMore] = useState(false);

	return (
		<div id='Main' className={styles.container}>
			<main
				className={styles.main}
				style={{
					maxHeight: `${showMore == true ? 'none' : '980px'}`,
				}}
			>
				<h2>Proyectos</h2>
				<section>
					<Bounce cascade damping={0.04} duration={800} triggerOnce>
						{Proyectos.map((proyecto) => (
							<Project
								key={proyecto.id}
								titulo={proyecto.titulo}
								descripcion={proyecto.descripcion}
								img={proyecto.img}
								url={proyecto.url}
							>
								{proyecto.descripcion.map((desc) => (
									<Iconos title={desc.toLowerCase()} key={desc} />
								))}
							</Project>
						))}
					</Bounce>
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
