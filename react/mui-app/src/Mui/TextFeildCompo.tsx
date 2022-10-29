import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { useRef, useState, useEffect } from "react";

const TextFeildCompo = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current !== null && inputRef.current.focus();
  }, []);
  return (
    <form>
      <Stack direction={"row"} spacing={2} alignItems={"center"} height="400px">
        <Stack marginLeft={"30px"} spacing={3}>
          <TextField
            label={"first name"}
            size={"small"}
            required
            helperText={text.length === 0 ? "please this input" : ""}
            color="secondary"
            inputProps={{ ref: inputRef }}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            size="small"
            type="submit"
            color="secondary">
            Click
          </Button>
        </Stack>
        <Stack spacing={3}>
          <TextField
            label="weight"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            label="amount"
            type={"number"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
      <h2>{text}</h2>
    </form>
  );
};

export default TextFeildCompo;
