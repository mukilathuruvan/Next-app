import React from "react";
import "./HeroImg.css";
import intro from "./assets/black.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={intro} className="intro-img" alt="into img" />
      </div>
      <div className="content">
        <p>HI I'M FREELANCER</p>
        <h1>React Devoloper</h1>
        <div className="hero-link">
          <Link to={"/project"} className="btn">
            Projects
          </Link>
          <Link to={"/contact"} className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
