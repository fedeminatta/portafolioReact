import Header from './components/Header';
import About from './components/About';
import Bg from './components/Bg';
import Main from './components/Main';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Cursor from './components/ui/Cursor';

export default function App() {
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	return (
		<>
			<div className='App' style={{ cursor: isMobile ? 'default' : 'none' }}>
				{!isMobile && <Cursor />}

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
