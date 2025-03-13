import Header from './components/Header';
import About from './components/About';
import Bg from './components/Bg';
import Main from './components/Main';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import AnimatedCursor from 'react-animated-cursor';

export default function App() {
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	return (
		<>
			<div className='App'>
				{!isMobile && (
					<AnimatedCursor
						trailingSpeed={6} // Mayor velocidad para menos cálculos intermedios
						showSystemCursor={false}
						innerSize={12} // Tamaño más pequeño para menos impacto visual
						outerSize={40} // Reducido para disminuir el peso del efecto
						innerScale={0.9} // Menor escala para suavizar animación
						outerScale={1.5}
						outerAlpha={0}
						hasBlendMode={false} // Desactivado para mejor rendimiento
						innerStyle={{
							background: '#34d7f7',
							zIndex: 9999, // Menos exagerado
						}}
						outerStyle={{
							border: 'solid 2px #34d7f7', // Menos grueso para menos render cost
							zIndex: 9999,
						}}
					/>
				)}

				<Header />

				<About />
				<Bg>
					<Main />
				</Bg>
				<Tools />
				<Contact />
				<Sidebar />
			</div>
		</>
	);
}
