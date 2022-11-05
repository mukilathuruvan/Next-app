import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./components/nav/Contact";
import About from "./components/nav/About";
import Help from "./components/nav/Help";
import Users from "./components/Users";
import Single from "./components/Single";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/contact" element={<Contact />}>
        <Route path="users" element={<Users />}></Route>
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      <Route path="/contact/users/:userId" element={<Single />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
