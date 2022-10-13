import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState, useRef } from "react";
import { ContextValue } from "./Context";

const Form = () => {
  const [input, setInput] = useState("");
  const focusRef = useRef();
  const { edit, addTask, todo, setTodo, setEdit } = useContext(ContextValue);
  const updateTask = (id, title, done) => {
    let final = todo.map((item) =>
      item.id === id ? { id, title, done } : item
    );
    setTodo(final);
  };
  useEffect(() => {
    focusRef.current.focus();
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [edit]);
  const add = (e) => {
    e.preventDefault();
    if (edit === null) {
      addTask(input);
      setInput("");
    } else {
      updateTask(edit.id, input, edit.done);
      setEdit(null);
    }
  };
  return (
    <form onSubmit={add}>
      <input
        type="text"
        placeholder={"Enter Task name"}
        value={input}
        ref={focusRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type={"submit"} disabled={input.length === 0}>
        {edit ? <>update Task</> : <>Add Task</>}
      </button>
    </form>
  );
};

export default Form;
