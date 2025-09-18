// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Navbar from "./Navbar";
import Header from "./Header";
import { auth } from "../firebase";
import "./Sign.css";


const Login = ({ register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("clicked");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/database");
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = "Error: " + error.message;
        if (errorCode === "auth/invalid-email") {
          errorMessage = "Bad Credentials";
        }
        alert(errorMessage);
      });
  };

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Header /> */}

      <div className="login-toggle">Welcome to English2SQL Again</div>

      <div className="login-container">
        <div className="top">
          <header>Login</header>
        </div>
        <form onSubmit={handleLogin}>
          <div className={`input-box ${error ? "error" : ""}`}>
            <input
              type="text"
              className={`input-field ${error ? "error" : ""}`}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <i className="bx bx-user"></i>
          </div>
          <div className={`input-box ${error ? "error" : ""}`}>
            <input
              type="password"
              className={`input-field ${error ? "error" : ""}`}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Sign In" />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            {/* <div className="two">
              <label>
                <a href="#">Forgot password?</a>
              </label>
            </div> */}
          </div>
          <div className="foot">
            <span>
              Don't have an account?{" "}
              <Link to="/registration" onClick={register}>
                Sign Up
              </Link>
            </span>
          </div>
          <div className="google-login">
            <GoogleLogin
              onSuccess={() => {
                navigate("/database");
              }}
              onError={() => {
                alert("Login Failed");
              }}
              renderProps={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign in with Google
                </button>
              )}
            />
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
