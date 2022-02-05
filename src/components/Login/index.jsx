import React, { useState, useEffect } from "react";
import cns from "classnames";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import Input from "../Input";
import Button from "../Button";
import axios from "../../utils/axios";
import Loader from "../Loader";

const Login = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [formError, setFormError] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("isLoggedIn"))) {
      router.push("/home");
    }
  }, []);

  async function handleLogin() {
    setLoading(true);
    axios
      .post("/login", { email, password })
      .then(({ data }) => {
        setFormError("");
        sessionStorage.setItem("isLoggedIn", data.loggedIn);
        router.push("/home");
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
        {formError && (
          <div className={cns(styles.formError, "")}>{formError}</div>
        )}
        <div className="row">
          {loading ? (
            <Loader coverPage={true} color="#aaff33" />
          ) : (
            <Button
              active
              id="loginBtn"
              onClick={handleLogin}
              className={cns(styles.loginBtn, "w-50")}
              disabled={loading}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
