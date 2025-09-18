import React, { useEffect, useRef } from "react";
import Use from "./Use";
import finalImage from "./final.png";
import "./Landing.css";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate(); // Define navigate here

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the /login route
  };

const handleClick = () => {
  navigate('/login');
};

  const headerRef = useRef(null);

  useEffect(() => {
    const sticky = headerRef.current.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      
      <header className="landing-header" ref={headerRef}>
        <div className="logo">
          English<span>2</span>SQL
        </div>
        <button onClick={handleLoginClick} className="auth">
          Login / Register
        </button>
      </header>
     

      <div className="title">
        <h1>
          Generate <span>SQL</span> Query
        </h1>
        <p> SQL Questions? We Got You Covered. Connect & Explore! </p>
      </div>

      <main>
        <section className="hero">
          <img alt="Landing Page" src={finalImage} />
          <button className="letsButton" onClick={handleClick}>
            Let's Get Started!!!
          </button>
        </section>

        <div className="margin"></div>

        <section className="use">
          <Use />
        </section>
      </main>

      <div className="footer">
        <p>© 2021 English2SQL. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Landing;
