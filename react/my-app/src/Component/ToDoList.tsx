import { validateHeaderValue } from "http";
import React, { useContext } from "react";
import { editTask } from "../Context/AllTypes";
import { TaskContext } from "../Context/AppContext";

const ToDoList = () => {
  const user = useContext(TaskContext);
  const updateTask = (item: editTask) => {
    user?.setEdit(item);
  };
  return (
    <ul>
      {user?.tasks.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <button onClick={() => updateTask(item)}>Edit</button>
          <button onClick={() => user.deleteTask(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
