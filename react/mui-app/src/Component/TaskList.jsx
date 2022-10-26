import React, { useContext } from "react";

import { Typography, Input, Button } from "@mui/material";
import { TaskContext } from "../Redux/Context";

const TaskList = () => {
  const { todo, del } = useContext(TaskContext);
  console.log(todo);
  return (
    <ul>
      {todo.map((item) => (
        <li key={item.id}>
          <Typography variant="h5">{item.title.toUpperCase()}</Typography>
          <Button color="error" variant="outlined" onClick={() => del(item.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
