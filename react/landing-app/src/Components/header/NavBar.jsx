import { Stack } from "@mui/material";
import React from "react";
import Company from "./Company";
import Link from "./Link";

const NavBar = () => {
  return (
      <Stack
      direction={"row"}
          justifyContent={"space-between"}
          padding={"10px"}
      className="nav-bar">
      <Company />
      <Link />
    </Stack>
  );
};

export default NavBar;
