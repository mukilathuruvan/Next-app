import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FooterContainer from "./Component/footer/FooterContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseCompo from "./Component/Courses/CourseCompo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/course" element={<>hello</>}></Route>
          <Route path="courses/:courseName" element={<CourseCompo />} />
          <Route path="/contact" element={<h3> Showing Contact Page</h3>} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
