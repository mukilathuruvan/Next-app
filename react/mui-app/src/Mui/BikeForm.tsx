import React, { useState } from "react";
import { Stack, TextField, Box, Button } from "@mui/material";
type one = {
  brand: string;
  model: string;
};
const BikeForm = () => {
  const [items, setItems] = useState([] as one[]);
  const [bike, setBike] = useState({} as one);
  const handleAdd = () => {
    setItems([...items, bike]);
    setBike({ model: "", brand: "" });
  };
  return (
    <Box height={"60vh"} padding="50px">
      <Stack justifyContent={"space-between"} direction="row">
        <Stack
          justifyContent={"center"}
          alignItems="center"
          height={"100%"}
          spacing={3}>
          <TextField
            label=" Enter Brand"
            required
            size="small"
            value={bike.brand}
            onChange={(e) => setBike({ ...bike, brand: e.target.value })}
            helperText="please fill this field"
            color="secondary"
          />
          <TextField
            label="Enter Model"
            required
            onChange={(e) => setBike({ ...bike, model: e.target.value })}
            size="small"
            value={bike.model}
            helperText="please enter your model"
            color="secondary"
          />
          <Button variant="contained" color="secondary" onClick={handleAdd}>
            Add Bike
          </Button>
        </Stack>
        <Stack>
          <ul>
            {items.map((item) => (
              <li>
                {item.brand} -{item.model}{" "}
              </li>
            ))}
          </ul>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BikeForm;
