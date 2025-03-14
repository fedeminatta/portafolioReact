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
import nextjsImg from '../img/tecnologias/nextjs.svg';
import tsImg from '../img/tecnologias/ts.svg';
import astroImg from '../img/tecnologias/astro.png';
import strapiImg from '../img/tecnologias/strapi.png';
import framerMotion from '../img/tecnologias/framerMotion.svg';
import supabaseIcon from '../img/tecnologias/supabase.png';

import { Zoom } from 'react-awesome-reveal';
//

const Tools = () => {
	return (
		<section className={styles.section} id='tools'>
			<h3>Tecnologías</h3>
			<article className={styles.article}>
				<Zoom cascade duration={200} triggerOnce>
					<div className={styles.item}>
						<a href='https://react.dev/' target='_blank' rel='noreferrer'>
							<img className={styles.react} src={reactImg} alt='React icon' />
						</a>
						<p>React</p>
					</div>
					<div className={styles.item}>
						<a href='https://supabase.com/' target='_blank' rel='noreferrer'>
							<img
								className={styles.supabase}
								src={supabaseIcon}
								alt='Supabase icon'
							/>
						</a>
						<p>Supabase</p>
					</div>
					<div className={styles.item}>
						<a href='https://astro.build/' target='_blank' rel='noreferrer'>
							<img className={styles.git} src={astroImg} alt='Astro icon' />
						</a>
						<p>Astro</p>
					</div>
					<div className={styles.item}>
						<a href='https://strapi.io/' target='_blank' rel='noreferrer'>
							<img
								className={styles.strapi}
								src={strapiImg}
								alt='Strapi icon'
							/>
						</a>
						<p>Strapi</p>
					</div>
					<div className={styles.item}>
						<a href='https://vitejs.dev/' target='_blank' rel='noreferrer'>
							<img className={styles.vite} src={viteImg} alt='Vite icon' />
						</a>
						<p>Vite</p>
					</div>
					<div className={styles.item}>
						<a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
							<img
								className={styles.nextjs}
								src={nextjsImg}
								alt='Next JS icon'
							/>
						</a>
						<p>Next JS</p>
					</div>
					<div className={styles.item}>
						<a
							href='https://developer.mozilla.org/es/docs/Web/JavaScript'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className={styles.javascript}
								src={jsImg}
								alt='JavaScript icon'
							/>
						</a>
						<p>JavaScript</p>
					</div>
					<div className={styles.item}>
						<a
							href=' https://www.typescriptlang.org/docs/'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className={styles.typescript}
								src={tsImg}
								alt='TypeScript black icon'
							/>
						</a>
						<p>TypeScript</p>
					</div>
					<div className={styles.item}>
						<a
							href='https://www.framer.com/motion/'
							target='_blank'
							rel='noreferrer'
						>
							<img
								className={styles.html}
								src={framerMotion}
								alt='framer motion icon'
							/>
						</a>
						<p>Framer Motion</p>
					</div>
					<div className={styles.item}>
						<a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
							<img
								className={styles.tailwind}
								src={tailwindImg}
								alt='Tailwind icon'
							/>
						</a>
						<p>Tailwind</p>
					</div>
					<div className={styles.item}>
						<a href='https://sass-lang.com/' target='_blank' rel='noreferrer'>
							<img className={styles.sass} src={sassImg} alt='SASS icon' />
						</a>
						<p>SASS</p>
					</div>
					<div className={styles.item}>
						<a href='https://git-scm.com/doc' target='_blank' rel='noreferrer'>
							<img className={styles.git} src={gitImg} alt='GIT icon' />
						</a>
						<p>GIT</p>
					</div>
					<div className={styles.item}>
						<a
							href='https://developer.mozilla.org/es/docs/Web/HTML'
							target='_blank'
							rel='noreferrer'
						>
							<img className={styles.html} src={htmlImg} alt='HTML icon' />
						</a>
						<p>HTML</p>
					</div>
					<div className={styles.item}>
						<a
							href='https://developer.mozilla.org/es/docs/Web/CSS'
							target='_blank'
							rel='noreferrer'
						>
							<img className={styles.css} src={cssImg} alt='CSS icon' />
						</a>
						<p>CSS</p>
					</div>
				</Zoom>
			</article>
		</section>
	);
};
export default Tools;
