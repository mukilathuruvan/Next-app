import { Stack, Typography } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <Stack
      spacing={4}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"left"}>
      <Typography variant="h2" fontFamily={"sans-serif"} fontWeight={"300"}>
        Time to make the career change you’ve always wanted .
      </Typography>
      <Typography variant={"h4"}>
        Lorem ipsum dolor sit amet consectetur{" "}
      </Typography>
    </Stack>
  );
};

export default Title;
