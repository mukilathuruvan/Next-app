import React from "react";
import ContactPage from "./ContactPage";
import CourseList from "./CourseList";
import { Container } from "@mui/material";
import { Stack } from "@mui/system";
const FooterContainer = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      marginX={"15px"}>
      <CourseList />
      <ContactPage />
    </Stack>
  );
};

export default FooterContainer;
