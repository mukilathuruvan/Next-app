import React, { useContext, useState } from "react";
import { TaskContext } from "../Redux/Context";
import { Button, Input } from "@mui/material";

const TaskForm = () => {
  const { add } = useContext(TaskContext);
  const [input, setInput] = useState("");
  return (
    <div>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
          <Button variant="contained" size="small" onClick={() => {
              setInput("")
              return add(input)
          }}>
        Add Task
      </Button>
    </div>
  );
};

export default TaskForm;
