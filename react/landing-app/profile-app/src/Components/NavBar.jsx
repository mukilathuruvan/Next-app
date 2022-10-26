import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const names = ["Home", "Project", "Contact", "About"];
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <Link to={"/"} className="master-header">
        {" "}
        <h1>Protfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {names.map((item) => (
          <li>
            {item === "Home" ? (
              <Link to={"/"}>{item}</Link>
            ) : (
              <Link to={item.toLowerCase()}>{item}</Link>
            )}
          </li>
        ))}
      </ul>
      <div className="handbarger-menu" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
