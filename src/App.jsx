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
						trailingSpeed={3}
						showSystemCursor={false}
						innerSize={20}
						outerSize={65}
						innerScale={1}
						outerScale={1.8}
						outerAlpha={0}
						hasBlendMode={true}
						innerStyle={{
							background: '#34d7f7',
							zIndex: '12111',
							// mixBlendMode: 'difference',
						}}
						outerStyle={{
							border: 'solid 3px #34d7f7',
							// boxShadow: '0 0 15px #34d7f7',
							zIndex: '12111',
							mixBlendMode: 'difference',
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
