import styles from './sass/Bg.module.sass';

const Bg = ({ children, style }) => {
	return (
		<section className={styles.bg} style={style}>
			{children}
		</section>
	);
};
export default Bg;
