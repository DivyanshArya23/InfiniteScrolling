import React, { Fragment } from "react";
import cns from "classnames";
import styles from "./index.module.scss";
import Button from "../Button";
import Input from "../Input";
import Loader from "../Loader";

const LoginForm = ({ onChangeInput, formError, loading, handleLogin }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default LoginForm;
