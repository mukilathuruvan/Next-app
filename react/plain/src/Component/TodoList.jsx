import React from "react";
import { useContext } from "react";
import { ContextValue } from "./Context";
const TodoList = () => {
  const { todo, addTask, setTodo, setEdit, edit } = useContext(ContextValue);
  const editTask = (id) => {
    const item = todo.find((item) => item.id === id);
    setEdit(item);
    console.log(edit);
  };
  const delete=(id) => {
    
  }
  return (
    <div>
      {todo.map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <button onClick={() => editTask(item.id)}>Edit</button>
          <button onClick={()=>delete()}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
