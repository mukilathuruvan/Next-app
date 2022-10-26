import { ToggleButtonGroup, ToggleButton,Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import FormatUnderLined from "@mui/icons-material/FormatUnderlined";

const ToggleButtonCompo = () => {
  const [format, setFormat] = useState<string | null>(null);
  const handleChangeFormat = (
    e: React.MouseEvent<HTMLElement>,
    data: string
  ) => {
      setFormat(data);
      console.log(format)
  };
  return (
    <div>
      <Typography variant="h6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima enim
        magni autem, quasi aliquid explicabo doloribus sequi animi culpa eius
        veniam odit aut aspernatur itaque velit distinctio expedita corporis ut.
      </Typography>
      <Stack>
        <ToggleButtonGroup
          value={format}
          exclusive
          onChange={handleChangeFormat}>
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderLined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
};

export default ToggleButtonCompo;
