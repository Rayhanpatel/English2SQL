import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import { GoogleLogin } from "@react-oauth/google";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";


const Registration = ({ login }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // This function can be used to validate the email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // Trim and validate the email before creating an account
    const trimmedEmail = email.trim();

    if (!isValidEmail(trimmedEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    createUserWithEmailAndPassword(auth, trimmedEmail, password)
      .then((userCredential) => {
        // Account creation successful
        // Redirect to the desired page
        navigate("/login");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  };

  return (
    <div>
      {/* <Navbar /> */}

      {/* <Header /> */}
      <div className="registration-toggle">Welcome to English 2 SQL</div>
      <div className="register-container">
        <div className="top">
          <header>Sign Up</header>
        </div>
        <form onSubmit={handleRegistration}>
          <div className="two-forms">
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Firstname"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Lastname"
                value={lastName}
                onChange={handleLastNameChange}
              />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Register" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check"> Remember Me</label>
            </div>
          </div>
          <div className="foot">
            <span>
              Have an account?{" "}
              <Link to="/login" onClick={login}>
                Login
              </Link>
            </span>
          </div>
          <div className="google-login">
            <GoogleLogin
              onSuccess={() => {
                navigate("/login");
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

export default Registration;
