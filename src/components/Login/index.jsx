import React, { useState, useEffect } from "react";
import cns from "classnames";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import Input from "../Input";
import Button from "../Button";
import axios from "../../utils/axios";

const Login = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn")) {
      router.push("/home");
    }
  }, []);

  async function handleLogin() {
    setLoading(true);
    axios
      .post("/login", { email, password })
      .then(({ data }) => {
        sessionStorage.setItem("isLoggedIn", data.loggedIn);
        router.push("/home");
      })
      .catch(() => {
        sessionStorage.setItem("isLoggedIn", false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onChangeInput(e) {
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
    <div className={cns("p-3", styles.loginDiv)}>
      <h3 className="text-center">Login</h3>
      <div className="formElement">
        <label className="w-100 label" htmlFor="email">
          Enter Email
        </label>
        <Input
          onChange={onChangeInput}
          name="email"
          className={cns(styles.input, "w-100")}
        />
      </div>
      <div className="formElement">
        <label className="w-100 label" htmlFor="password">
          Enter Password
        </label>
        <Input
          onChange={onChangeInput}
          name="password"
          className={cns(styles.input, "w-100")}
        />
      </div>
      <div className="row">
        <Button
          active
          onClick={handleLogin}
          className={cns(styles.loginBtn, "w-50")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
