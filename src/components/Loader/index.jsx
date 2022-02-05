import React from "react";
import cns from "classnames";
import styles from "./loader.module.scss";

const Loader = ({ coverPage, color }) => {
  return (
    <div className={cns({ [styles.coverPage]: coverPage })}>
      <div className={cns(styles.loaderDiv)}>
        <div
          className={cns(styles.loaderDot, styles.loaderDot1)}
          style={{ ...(color ? { backgroundColor: color } : {}) }}
        ></div>
        <div
          className={cns(styles.loaderDot, styles.loaderDot2)}
          style={{ ...(color ? { backgroundColor: color } : {}) }}
        ></div>
        <div
          className={cns(styles.loaderDot, styles.loaderDot3)}
          style={{ ...(color ? { backgroundColor: color } : {}) }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
