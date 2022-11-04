import React, { createContext, useState } from "react";
import store from "./Store";
export const TaskContext = createContext(null);
const Context = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const add = (title) => {
    setTodo([...todo, { id: ++todo.length, title, done: false }]);
  };
  const del = (id) => {
    const result = todo.filter((item) => item.id !== id);
    setTodo(result);
  };
  
  return (
    <TaskContext.Provider value={{ todo, add, del }}>
      {children}
    </TaskContext.Provider>
  );
};

export default Context;
