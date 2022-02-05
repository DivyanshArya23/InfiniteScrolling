import React from "react";
import cns from "classnames";
import styles from "./usercard.module.scss";

const Usercard = ({ details }) => {
  return (
    <div className={cns(styles.card, "container")}>
      <div className="row">
        <div className="col-12 col-md-5">
          <div
            className={cns(styles.image, "display-inline-block")}
            style={{ backgroundImage: `url('${details.imageUrl}')` }}
          ></div>
        </div>
        <div className="col-12 col-md-7">
          <div className="div">{details.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
