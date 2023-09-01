import Header from './components/Header';
import About from './components/About';
import Bg from './components/Bg';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import AnimatedCursor from 'react-animated-cursor';

export default function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={20}
        outerSize={65}
        innerScale={1}
        outerScale={1.8}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          background: '#34d7f7',
          zIndex: '12111',
        }}
        outerStyle={{
          border: 'solid 3px #34d7f7',
          boxShadow: '0 0 15px #34d7f7',
          mixBlendMode: 'difference',
          zIndex: '12111',
        }}
      />
      <Header />
      <Sidebar />
      <About />
      <Bg />
      <Tools />
      <Contact />
    </div>
  );
}
