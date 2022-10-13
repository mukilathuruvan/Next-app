import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoApp from "./Component/ToDoApp";
import AppContext from "./Context/AppContext";

function App() {
  return (
    <AppContext>
      <ToDoApp />
    </AppContext>
  );
}

export default App;
