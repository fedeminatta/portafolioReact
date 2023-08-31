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
// import flexbox from '../img/trabajos/flexbox.webp';
// import cryptos from '../img/trabajos/cryptos.webp';
// import gastoSemanal from '../img/trabajos/gasto-semanal.webp';
// import sumaResta from '../img/trabajos/suma-resta.webp';
// import hojas from '../img/trabajos/hojas.webp';
// import monedas from '../img/trabajos/monedas.webp';
// img

const proyectos = [
  {
    id: nanoid(),
    titulo: 'Juego de Memoria',
    descripcion: 'HTML - SASS - JavaScript',
    img: juegoMemoria,
    url: 'https://juego-memoria-mf.netlify.app/',
  },
  {
    id: nanoid(),
    titulo: 'Notas React',
    descripcion: 'HTML - SASS - React - JavaScript',
    img: notasReact,
    url: 'https://notas-mf.netlify.app/',
  },
  {
    id: nanoid(),
    titulo: 'ADM de Veterinaria React',
    descripcion: 'HTML - Tailwind - CSS - React - JavaScript',
    img: veterinariaReact,
    url: 'https://citas-react-mf.netlify.app/',
  },
  {
    id: nanoid(),
    titulo: 'Gasto Semanal React',
    descripcion: 'HTML - CSS - React - JavaScript',
    img: reactGastos,
    url: 'https://gastos-mf.netlify.app/',
  },
  {
    id: nanoid(),
    titulo: 'Carrito de Comidas',
    descripcion: 'HTML - SASS - JavaScript',
    img: carritoComidas,
    url: 'https://carrito-comida-mf.netlify.app/',
  },

  {
    id: nanoid(),
    titulo: 'Juego de Piedra Papel o Tijera',
    descripcion: 'HTML - SASS - JavaScript',
    img: piedra,
    url: 'https://juego-piedra-mf.netlify.app/',
  },
  {
    id: nanoid(),
    titulo: 'CRM',
    descripcion: 'HTML - CSS - JavaScript - Tailwind',
    img: crmImg,
    url: 'https://crm-mf.netlify.app/',
  },

  {
    id: nanoid(),
    titulo: 'Juego de Ahorcado',
    descripcion: 'HTML - SASS - JavaScript',
    img: ahorcado,
    url: 'https://ahorcado-mf.netlify.app/',
  },
  // {
  //   id: nanoid(),
  //   titulo: 'Cotizador de Cryptos',
  //   descripcion: 'HTML - CSS - React - JavaScript',
  //   img: cryptos,
  //   url: 'https://cryptos-mf.netlify.app/',
  // },
  {
    id: nanoid(),
    titulo: 'ADM de Veterinaria JS',
    descripcion: 'HTML - SASS - JavaScript',
    img: veterinariaJS,
    url: 'https://veterinaria-mf.netlify.app/',
  },
  // {
  //   id: nanoid(),
  //   titulo: 'Gasto Semanal JS',
  //   descripcion: 'HTML - CSS - Bootstrap - JavaScript',
  //   img: gastoSemanal,
  //   url: 'https://gasto-semanal-mf.netlify.app/',
  // },
  {
    id: nanoid(),
    titulo: 'Filtrador de Autos',
    descripcion: 'HTML - SASS - JavaScript',
    img: autos,
    url: 'https://filtrador-autos.netlify.app/',
  },

  {
    id: nanoid(),
    titulo: 'Restaurante',
    descripcion: 'HTML - SASS - JavaScript - jQuery',
    img: restaurant,
    url: 'https://restaurant-mf.netlify.app/',
  },
  {
    id: nanoid(),
    titulo: 'Formulario de Compras',
    descripcion: 'HTML - CSS - JavaScript',
    img: formCompras,
    url: 'https://formulario-compras-mf.netlify.app/',
  },
  // {
  //   id: nanoid(),
  //   titulo: 'Apuntes de Flexbox CSS',
  //   descripcion: 'HTML - SASS',
  //   img: flexbox,
  //   url: 'https://flexbox-mf.netlify.app/',
  // },
  // {
  //   id: nanoid(),
  //   titulo: 'Juego de Apuestas',
  //   descripcion: 'HTML - SASS - JavaScript',
  //   img: monedas,
  //   url: 'https://monedas-mf.netlify.app/',
  // },
  // {
  //   id: nanoid(),
  //   titulo: 'Sumas y Restas',
  //   descripcion: 'HTML - SASS - JavaScript',
  //   img: sumaResta,
  //   url: 'https://suma-resta-mf.netlify.app/',
  // },
  // {
  //   id: nanoid(),
  //   titulo: 'Página de Plantas',
  //   descripcion: 'HTML - SASS',
  //   img: hojas,
  //   url: 'https://plantas-mf.netlify.app/',
  // },
];

export default proyectos;
