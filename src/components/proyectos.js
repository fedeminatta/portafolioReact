import { nanoid } from 'nanoid';
// img
import juegoMemoria from '../img/trabajos/juegoMemoria.webp';
import ahorcado from '../img/trabajos/ahorcado.webp';
import autos from '../img/trabajos/autos.webp';
import carritoComidas from '../img/trabajos/carritoComidas.webp';
import crmImg from '../img/trabajos/crmImg.webp';
import formCompras from '../img/trabajos/formularioCompras.webp';
import reactGastos from '../img/trabajos/reactGastos.webp';
import notasReact from '../img/trabajos/notasReact.webp';
import piedra from '../img/trabajos/piedra.webp';
import restaurant from '../img/trabajos/restaurant.webp';
import veterinariaJS from '../img/trabajos/veterinariaJS.webp';
import veterinariaReact from '../img/trabajos/veterinariaReact.webp';
import horarios from '../img/trabajos/horarios.webp';
import postres from '../img/trabajos/postresTemplate.webp';
import ecommerce from '../img/trabajos/ecommerce.png';
import arquitectura from '../img/trabajos/arquitectura2.png';
import ytSing from '../img/trabajos/ytSing.png';
import gradient from '../img/trabajos/gradient.png';
const proyectos = [
	{
		id: nanoid(),
		titulo: 'Ecommerce',
		descripcion: [
			'Next JS',
			'React',
			'Strapi',
			'Stripe',
			'JavaScript',
			'SASS',
			'CSS',
			'HTML',
		],
		img: ecommerce,
		url: 'https://ecommerce-demo-federico-minatta.vercel.app/',
	},
	{
		id: nanoid(),
		titulo: 'YT Sing',
		descripcion: [
			'Next JS',
			'React',
			'TypeScript',
			'Tailwind',
			'JavaScript',
			'framer motion',
			'CSS',
			'HTML',
		],
		img: ytSing,
		url: 'https://yt-sing.vercel.app/',
	},
	{
		id: nanoid(),
		titulo: 'Gradient-React component',
		descripcion: ['React', 'TypeScript', 'JavaScript', 'sass', 'CSS', 'HTML'],
		img: gradient,
		url: 'https://gradient-react-web.vercel.app/',
	},
	{
		id: nanoid(),
		titulo: 'Arquitectura',
		descripcion: ['Astro', 'React', 'JavaScript', 'SCSS', 'CSS', 'HTML'],
		img: arquitectura,
		url: 'https://arquitectura-demo-federico-minatta.vercel.app/',
	},
	{
		id: nanoid(),
		titulo: 'Horario Plan',
		descripcion: ['Next JS', 'React', 'JavaScript', 'SASS', 'CSS', 'HTML'],
		img: horarios,
		url: 'https://horarioplan.vercel.app/',
	},
	{
		id: nanoid(),
		titulo: 'Postres',
		descripcion: ['React', 'Vite', 'JavaScript', 'SASS', 'CSS', 'HTML'],
		img: postres,
		url: 'https://postres-template.vercel.app/',
	},
	{
		id: nanoid(),
		titulo: 'Juego de Memoria',
		descripcion: ['JavaScript', 'CSS', 'SASS', 'HTML'],
		img: juegoMemoria,
		url: 'https://juego-memoria-mf.netlify.app/',
	},
	{
		id: nanoid(),
		titulo: 'Notas React',
		descripcion: ['React', 'vite', 'JavaScript', 'CSS', 'SASS', 'HTML'],
		img: notasReact,
		url: 'https://notas-mf.netlify.app/',
	},
	{
		id: nanoid(),
		titulo: 'ADM de Veterinaria React',
		descripcion: ['React', 'vite', 'JavaScript', 'Tailwind', 'CSS', 'HTML'],
		img: veterinariaReact,
		url: 'https://citas-react-mf.netlify.app/',
	},
	{
		id: nanoid(),
		titulo: 'Gasto Semanal React',
		descripcion: ['React', 'vite', 'JavaScript', 'CSS', 'HTML'],
		img: reactGastos,
		url: 'https://gastos-mf.netlify.app/',
	},
	{
		id: nanoid(),
		titulo: 'Carrito de Comidas',
		descripcion: ['JavaScript', 'SASS', 'CSS', 'HTML'],
		img: carritoComidas,
		url: 'https://carrito-comida-mf.netlify.app/',
	},

	{
		id: nanoid(),
		titulo: 'Juego de Piedra Papel o Tijera',
		descripcion: ['JavaScript', 'SASS', 'CSS', 'HTML'],
		img: piedra,
		url: 'https://juego-piedra-mf.netlify.app/',
	},
	{
		id: nanoid(),
		titulo: 'CRM',
		descripcion: ['JavaScript', 'Tailwind', 'CSS', 'HTML'],
		img: crmImg,
		url: 'https://crm-mf.netlify.app/',
	},

	{
		id: nanoid(),
		titulo: 'Juego de Ahorcado',
		descripcion: ['JavaScript', 'SASS', 'CSS', 'HTML'],
		img: ahorcado,
		url: 'https://ahorcado-mf.netlify.app/',
	},

	{
		id: nanoid(),
		titulo: 'ADM de Veterinaria JS',
		descripcion: ['JavaScript', 'SASS', 'CSS', 'HTML'],
		img: veterinariaJS,
		url: 'https://veterinaria-mf.netlify.app/',
	},

	{
		id: nanoid(),
		titulo: 'Filtrador de Autos',
		descripcion: ['JavaScript', 'SASS', 'CSS', 'HTML'],
		img: autos,
		url: 'https://filtrador-autos.netlify.app/',
	},

	{
		id: nanoid(),
		titulo: 'Restaurante',
		descripcion: ['JavaScript', 'jQuery', 'SASS', 'CSS', 'HTML'],
		img: restaurant,
		url: 'https://restaurant-mf.netlify.app/',
	},
	{
		id: nanoid(),
		titulo: 'Formulario de Compras',
		descripcion: ['JavaScript', 'CSS', 'HTML'],
		img: formCompras,
		url: 'https://formulario-compras-mf.netlify.app/',
	},
];

export default proyectos;
