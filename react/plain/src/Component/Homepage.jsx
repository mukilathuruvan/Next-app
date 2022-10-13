import React from "react";
import { useContext } from "react";
import { ContextValue } from "./Context";
import Form from "./Form";
import TodoList from "./TodoList";
const Homepage = () => {
  const name = useContext(ContextValue);
  return (
    <div>
      <Form />
      <TodoList />
    </div>
  );
};

export default Homepage;
