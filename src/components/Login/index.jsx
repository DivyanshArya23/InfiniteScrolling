import React from "react";
import cns from "classnames";
import styles from "./index.module.scss";
import Input from "../Input";
import Button from "../Button";

const Login = () => {
  return (
    <div className={cns("p-3", styles.loginDiv)}>
      <h3 className="text-center">Login</h3>
      <div className="formElement">
        <label className="w-100 label" htmlFor="email">
          Enter Email
        </label>
        <Input name="email" className={cns(styles.input, "w-100")} />
      </div>
      <div className="formElement">
        <label className="w-100 label" htmlFor="email">
          Enter Password
        </label>
        <Input name="email" className={cns(styles.input, "w-100")} />
      </div>
      <div className="row">
        <Button active className={cns(styles.loginBtn, "w-50")}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
