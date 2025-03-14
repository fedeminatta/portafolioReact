import styles from './sass/Iconos.module.sass';

import htmlIcon from '@img/tecnologias/html.png';
import cssIcon from '@img/tecnologias/css.png';
import nextIcon from '@img/tecnologias/nextjs.svg';
import reactIcon from '@img/tecnologias/react.png';
import viteIcon from '@img/tecnologias/vite.webp';
import sassIcon from '@img/tecnologias/sass.png';
import jsIcon from '@img/tecnologias/js.png';
import tailwindIcon from '@img/tecnologias/tailwind.png';
import stripeIcon from '@img/tecnologias/stripe.svg';
import strapiIcon from '@img/tecnologias/strapi.png';
import jqueryIcon from '@img/tecnologias/jquery.svg';
import astroIcon from '@img/tecnologias/astro.png';
import tsIcon from '@img/tecnologias/ts.svg';
import framerMotion from '../img/tecnologias/framerMotion.svg';
import supabaseIcon from '../img/tecnologias/supabase.png';

const Iconos = ({ title }) => {
	let color;
	let textColor;
	let icon;
	switch (title) {
		case 'html':
			color = '#f26323';
			icon = htmlIcon;
			textColor = '#fff';
			break;
		case 'css':
			color = '#329bff';
			icon = cssIcon;
			textColor = '#fff';
			break;
		case 'next js':
			color = '#d7d7d7';
			icon = nextIcon;
			break;
		case 'react':
			color = '#074677';
			icon = reactIcon;
			textColor = '#fff';
			break;
		case 'vite':
			color = '#000';
			icon = viteIcon;
			textColor = '#fff';
			break;
		case 'jquery':
			color = '#fff';
			icon = jqueryIcon;
			textColor = '#000';
			break;
		case 'sass':
			color = '#d75395';
			icon = sassIcon;
			textColor = '#fff';
			break;
		case 'scss':
			color = '#d75395';
			icon = sassIcon;
			textColor = '#fff';
			break;
		case 'javascript':
			color = '#000000';
			icon = jsIcon;
			textColor = '#fff';
			break;
		case 'typescript':
			color = '#fff';
			icon = tsIcon;
			textColor = '#000';
			break;
		case 'framer motion':
			color = '#fff';
			icon = framerMotion;
			textColor = '#000';
			break;
		case 'tailwind':
			color = '#fff';
			icon = tailwindIcon;
			textColor = '#000';
			break;
		case 'stripe':
			color = '#fff';
			icon = stripeIcon;
			textColor = '#000';
			break;
		case 'strapi':
			color = '#fff';
			icon = strapiIcon;
			textColor = '#000';
			break;
		case 'astro':
			color = '#fff';
			icon = astroIcon;
			textColor = '#000';
			break;
		case 'supabase':
			color = '#000';
			icon = supabaseIcon;
			textColor = '#fff';
			break;
		default:
			break;
	}
	return (
		<>
			<div
				className={styles.iconos}
				style={{
					backgroundColor: color,
					color: textColor,
					boxShadow: `0px 0px 8px ${color}`,
				}}
			>
				<img className={styles.img} src={icon} alt={title} />
				<p>{title}</p>
			</div>
		</>
	);
};
export default Iconos;
