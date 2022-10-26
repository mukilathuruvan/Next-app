import React from "react";
import { Button, Stack } from "@mui/material";
const Link = () => {
  return (
    <Stack
      className="header-buttons"
      direction={"row"}
      spacing={3}
      padding={"0px"}
      alignItems={"center"}>
      <Button variant="outlined" href="/course" className="button">
        Courses
      </Button>
      <Button variant="outlined" href="/contact" className="button">
        Contact
      </Button>
    </Stack>
  );
};

export default Link;
