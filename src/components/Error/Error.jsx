import styles from "./Error.module.css";

function Error({ errMessage }) {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.error}>💥 {errMessage}</p>
    </div>
  );
}

export default Error;
