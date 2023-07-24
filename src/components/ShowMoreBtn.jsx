import styles from './sass/ShowMoreBtn.module.sass';

const ShowMoreBtn = ({ text, setShowMore, showMore }) => {
  return (
    <button
      className={styles.showMoreBtn}
      onClick={() => setShowMore(!showMore)}
    >
      {text}
    </button>
  );
};
export default ShowMoreBtn;
