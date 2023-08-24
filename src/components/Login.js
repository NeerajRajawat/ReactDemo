import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import TextAnalsis from "./TextAnalsis";
import Navbar from "./Navbar";
import App from "../App";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const changePwd = (event) => {
    setPwd(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const login = (event) => {
    if (email === "admin" && pwd === "admin") {
      ReactDOM.render(
        <React.StrictMode>
          <TextAnalsis></TextAnalsis>
        </React.StrictMode>,
        document.getElementById("root")
      );
    } else {
      ReactDOM.render(
        <React.StrictMode>
          <App></App>
        </React.StrictMode>,
        document.getElementById("root")
      );
    }
  };

  return (
    <div className="container ">
      <form className="pt-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={changeEmail}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={changePwd}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={login}>
          Submit
        </button>
      </form>
    </div>
  );
}
