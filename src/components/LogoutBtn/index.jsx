import Router from "next/router";
import React from "react";
import Button from "../Button";
import styles from "./logout.module.scss";

const LogoutBtn = () => {
  function clickLogout() {
    sessionStorage.removeItem("isLoggedIn");
    Router.push("/");
  }
  return (
    <div className={styles.logoutDiv}>
      <Button onClick={clickLogout} active className={styles.logoutBtn}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutBtn;
