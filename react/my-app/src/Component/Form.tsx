import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../Context/AppContext";
const Form = () => {
  const [input, setInput] = useState("");
  const value = useContext(TaskContext);
  const updateTask = (id: number, title: string, done: boolean) => {
    if (value?.edit) {
      value.setTask([...value.tasks, { id, title, done }]);
      console.log(value.edit);
    }
  };
  const addTaskCompo = () => {
    if (!value?.edit) {
      value?.addTask(input);
      setInput("");
    } else {
      let { id, done } = value.edit;
      updateTask(id, input, done);
    }
  };
  const taskUpdate = () => {
    if (value?.edit) setInput(value.edit.title);
  };
  useEffect(taskUpdate, [value?.edit]);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTaskCompo}>Add Task</button>
    </div>
  );
};

export default Form;
