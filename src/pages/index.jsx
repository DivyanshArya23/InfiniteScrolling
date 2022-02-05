import React from "react";
import styles from "./index.module.scss";
import Login from "../components/Login";
export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Login />
    </div>
  );
}
