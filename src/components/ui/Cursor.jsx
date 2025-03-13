import style from './Cursor.module.sass';
import { useRef, useEffect } from 'react';

const Cursor = () => {
	const cursorDotOutline = useRef(null);
	const cursorDot = useRef(null);

	useEffect(() => {
		const moveCursor = (e) => {
			const posX = e.clientX;
			const posY = e.clientY;

			cursorDot.current.style.left = `${posX}px`;
			cursorDot.current.style.top = `${posY}px`;
			cursorDotOutline.current.style.left = `${posX}px`;
			cursorDotOutline.current.style.top = `${posY}px`;

			cursorDotOutline.current.animate(
				{ left: `${posX}px`, top: `${posY}px` },
				{ duration: 500, fill: 'forwards' }
			);
		};

		const handleHover = () => {
			cursorDotOutline.current.style.transform = 'scale(1.8)'; // Agrandar al hover
		};

		const handleLeave = () => {
			cursorDotOutline.current.style.transform = 'scale(1)'; // Volver al tamaño original
		};

		document.addEventListener('mousemove', moveCursor);
		document
			.querySelectorAll('a, button, [data-cursor-hover]')
			.forEach((el) => {
				el.addEventListener('mouseenter', handleHover);
				el.addEventListener('mouseleave', handleLeave);
			});

		return () => {
			document.removeEventListener('mousemove', moveCursor);
			document
				.querySelectorAll('a, button, [data-cursor-hover]')
				.forEach((el) => {
					el.removeEventListener('mouseenter', handleHover);
					el.removeEventListener('mouseleave', handleLeave);
				});
		};
	}, []);

	return (
		<>
			<div ref={cursorDotOutline} className={style.cursor_outline}></div>
			<div ref={cursorDot} className={style.cursor_dot}></div>
		</>
	);
};

export default Cursor;
