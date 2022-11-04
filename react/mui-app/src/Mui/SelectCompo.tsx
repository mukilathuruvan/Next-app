import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const SelectCompo = () => {
  const [course, setCourse] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const dum = typeof val === "string" ? val.split(",") : val;
    console.log(course);

    setCourse(dum);
  };
  return (
    <Box width={"200px"} margin="20px">
      <TextField
        label="select Course"
        select
        fullWidth
        size="small"
        value={course}
        SelectProps={{ multiple: true }}
        onChange={handleChange}>
        <MenuItem value="py">Python</MenuItem>
        <MenuItem value="java">Java</MenuItem>
        <MenuItem value="js">Web Dev</MenuItem>
      </TextField>
    </Box>
  );
};

export default SelectCompo;
