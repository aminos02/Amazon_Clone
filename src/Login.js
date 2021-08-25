import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const signIn = (e) => {
    e.preventDefault();
  };
  const signUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__img"
          alt="login logo"
        />
      </Link>
      <div className="login__card">
        <h2>Sign In</h2>
        <form className="login__card__form">
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            id="email"
            type="email"
            placeholder="enter email"
            onChange={handleEmail}
          />
          <label htmlFor="pass">Password</label>
          <input
            id="pass"
            type="password"
            placeholder="enter a password"
            value={password}
            onChange={handlePassword}
          />
          <button onClick={signIn} type="submit" className="login__signIn__btn">
            Sign In
          </button>
          <p>
            By signing-in you agree to Amazon's Clone App Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </form>
        <button onClick={signUp} className="login__create__btn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;