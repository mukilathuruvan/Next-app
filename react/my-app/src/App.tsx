import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoApp from "./Component/ToDoApp";
import AppContext from "./Context/AppContext";
import ProductPage from "./Component/ProductPage";

function App() {
  return (
    <AppContext>
      <ToDoApp />
    </AppContext>
    // <ProductPage />
  );
}

export default App;
