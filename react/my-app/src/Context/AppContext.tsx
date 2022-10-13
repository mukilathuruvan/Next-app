import React, { useState } from "react";
import {
  taskType,
  contextValueType,
  ContextPropType,
  editTask,
} from "./AllTypes";

export const TaskContext = React.createContext<null | contextValueType>(null);
const AppContext = ({ children }: ContextPropType) => {
  const [tasks, setTask] = useState<taskType>([]);
  const [edit, setEdit] = useState<editTask | null>(null);
  let addTask = (title: string) => {
    setTask([...tasks, { id: ++tasks.length, title, done: false }]);
  };
  let deleteTask = (id: number) => {
    if (tasks.length > 1) {
      const result = tasks.filter((item) => item.id !== id);
      setTask(result);
    }
  };
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, setEdit, edit, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default AppContext;
