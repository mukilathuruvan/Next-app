import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ContextValue = createContext(null);

const Context = ({ children }) => {
    const [todo, setTodo] = useState([]);
    const [edit,setEdit]=useState(null)
  const addTask = (title) => {
    setTodo([...todo, { id: ++todo.length, title, done: false }]);
  };
  const value = { todo, setTodo, addTask,edit,setEdit };
  return (
    <ContextValue.Provider value={value}>{children}</ContextValue.Provider>
  );
};

export default Context;
