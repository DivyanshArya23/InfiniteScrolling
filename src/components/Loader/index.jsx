import React from "react";
import cns from "classnames";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderDiv}>
      <div className={cns(styles.loaderDot, styles.loaderDot1)}></div>
      <div className={cns(styles.loaderDot, styles.loaderDot2)}></div>
      <div className={cns(styles.loaderDot, styles.loaderDot3)}></div>
    </div>
  );
};

export default Loader;
