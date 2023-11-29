import Header from './components/Header';
import About from './components/About';
import Bg from './components/Bg';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
// import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';
import styles from './components/sass/App.module.sass';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className={styles.ldsHeart}>
                    <div></div>
                </div>
            ) : (
                <div className="App">
                    {/* <AnimatedCursor
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
                            // mixBlendMode: 'difference',
                        }}
                    /> */}
                    <Header />
                    <Sidebar />
                    <About />
                    <Bg />
                    <Tools />
                    <Contact />
                </div>
            )}
        </>
    );
}
