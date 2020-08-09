import React, { useState, useEffect } from "react";
import InputComponent from "../../Base/InputComponent";
import Button from "../../Base/ButtonComponent";
import ImgComponent from "../../Base/ImgComponent";
import Loader from "../../Base/LoaderComponent";
import { validateMail, hasUpperCase } from "../../../Utils.js";
const formStyle = {
  formContainer: {
    height: "calc(100vh - 80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "350px",
    padding: "8px 0px",
    borderRadius: "4px",
    boxShadow: "0px 2px 4px 1px #dcdcdc"
  },
  formContent: {
    padding: "24px 16px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};
export default function() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [mailError, setMailError] = useState({ error: false, errorText: "" });
  const [passwordError, setPasswordError] = useState({
    error: false,
    errorText: ""
  });
  const [loaderData, setLoaderData] = useState({
    showLoader: false,
    loaderMessage: ""
  });
  const [buttonState, setButtonState] = useState(false);
  useEffect(() => {
    setMailError({
      error: false,
      errorText: ""
    });
  }, [mail]);
  useEffect(() => {
    setPasswordError({ error: false, errorText: "" });
  }, [password]);
  const validateFields = () => {
    if (!mail) {
      setMailError({ error: true, errorText: "" });
      return false;
    }
    if (mail && mail.length < 6) {
      setMailError({
        error: true,
        errorText: "Email should be more than 5 characters long"
      });
      return false;
    }
    if (!validateMail(mail)) {
      setMailError({
        error: true,
        errorText: "Please enter a valid mail"
      });
      return false;
    }
    if (!password) {
      setPasswordError({ error: true, errorText: "" });
      return false;
    }
    if (password.length < 7) {
      setPasswordError({
        error: true,
        errorText: "Password should be more than 6 characters long"
      });
      return false;
    }
    if (!hasUpperCase(password)) {
      setPasswordError({
        error: true,
        errorText: "Password should contain at least one uppercase"
      });
      return false;
    }
    return true;
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (validateFields()) {
      setButtonState(true);
      setLoaderData({ showLoader: true, loaderMessage: "Signing In" });
      fetch(
        "http://www.mocky.io/v2/5d9d9219310000153650e30b?mocky-delay=2000ms"
      )
        .then(res => {
          return res.json();
        })
        .then(
          result => {
            setButtonState(false);
            setLoaderData({ showLoader: false, loaderMessage: "" });
          },
          error => {
            setButtonState(false);
            setLoaderData({ showLoader: false, loaderMessage: "" });
          }
        );
    }
  };
  return (
    <div>
      <Loader {...loaderData} />
      <div style={formStyle.formContainer}>
        <form style={formStyle.form} onSubmit={handleSubmit}>
          <div style={formStyle.formContent}>
            <ImgComponent
              alt={"Healthifyme"}
              src={`https://s3.ap-south-1.amazonaws.com/tpng-images/random/original/6be52f0b-56bf-4fdc-abd3-0bec9e58610c.png`}
            />
            <div
              style={{ fontSize: "18px", padding: "8px", fontWeight: "bold" }}
            >
              Sign in
            </div>
            <div
              style={{ fontSize: "14px", padding: "8px", fontWeight: "500" }}
            >
              Use your Healthifyme Account
            </div>
            <InputComponent
              value={mail}
              placeholder="Enter Your Email"
              {...mailError}
              handleChange={evt => setMail(evt.target.value)}
            />
            <InputComponent
              value={password}
              type="password"
              placeholder="Enter Your Password"
              {...passwordError}
              handleChange={evt => setPassword(evt.target.value)}
            />
            <Button
              id="test"
              title="Login"
              disabled={buttonState}
              style={{ width: "100%" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
