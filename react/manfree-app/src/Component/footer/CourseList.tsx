import React from "react";
import "../../styles/courselist.css";
import { courses } from "../../Context/GlobalStore";
import { NavLink, Outlet } from "react-router-dom";
const CourseList = () => {
  return (
    <>
      <Outlet />
      <ul className="course-list-parent">
        <h3>{"Our Courses"}</h3>
        {courses.map((course) => (
          <li key={course.name.length} className={"course-list-child"}>
            <NavLink to={`/${course.name}`}>{course.name}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseList;
