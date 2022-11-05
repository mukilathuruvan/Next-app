import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/help"}>Help</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  );
};

export default NavBar;
