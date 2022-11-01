import React from "react";
import { useContext } from "react";
import { ContextValue } from "./Context";
import Form from "./Form";
import One from "./One";
import TodoList from "./TodoList";
const Homepage = () => {
  const name = useContext(ContextValue);
  return (
    <div>
      {/* <Form />
      <TodoList /> */}
      <One />
    </div>
  );
};

export default Homepage;
