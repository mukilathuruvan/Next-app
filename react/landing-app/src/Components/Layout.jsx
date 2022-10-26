import { Container, Stack } from "@mui/material";
import React from "react";
import NavBar from "./header/NavBar";
import Title from "./Titlt/Title";

const Layout = () => {
  return (
    <div className="body">
      <NavBar />
      <Container>
        <div className="container">
          <div>
            <Title />
          </div>
          <div className="container-img"></div>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
