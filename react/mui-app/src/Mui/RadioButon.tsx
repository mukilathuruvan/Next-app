import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
const RadioButon = () => {
  return (
    <div>
      <FormControl>
        <FormLabel id="gender-tag">select Your Gender</FormLabel>
        <RadioGroup aria-labelledby="gender-tag" name="gender">
          <FormControlLabel
            control={<Radio size="small" />}
            label="Male"
            value={"men"}
          />
          <FormControlLabel
            control={<Radio size="small" />}
            label="Female"
            value="woman"
          />
          <FormControlLabel
            control={<Radio size="small"/>}
            label="others"
            value="others"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButon;
