import React, { useState, useEffect } from "react";
import cns from "classnames";
import Router from "next/router";
import styles from "./index.module.scss";
import axios from "../../utils/axios";
import LoginForm from "./form";

const Login = () => {
  const [email, setemail] = useState("");
  const [formError, setFormError] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("isLoggedIn"))) {
      Router.push("/home");
    }
  }, []);

  async function handleLogin() {
    setLoading(true);
    axios
      .post("/login", { email, password })
      .then(({ data }) => {
        setFormError("");
        sessionStorage.setItem("isLoggedIn", data.loggedIn);
        Router.push("/home");
      })
      .catch(() => {
        setFormError("Invalid Username or Password");
        sessionStorage.setItem("isLoggedIn", false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onChangeInput(e) {
    setFormError("");
    switch (e.target.name) {
      case "email":
        setemail(e.target.value.trim());
        break;
      case "password":
        setpassword(e.target.value.trim());
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.loginScreen}>
      <div className={cns("p-3", styles.loginDiv)}>
        <h3 className="text-center">Login</h3>
        <LoginForm
          onChangeInput={onChangeInput}
          formError={formError}
          loading={loading}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
