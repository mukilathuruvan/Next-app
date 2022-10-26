import React from "react";
import "../../styles/courselist.css";
import { courses } from "../../Context/GlobalStore";
import { NavLink, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
const CourseList = () => {
  return (
    <>
      {/* <Outlet /> */}
      <Stack textAlign={"left"} spacing={2}>
        <h3>{"Our Courses"}</h3>
        {courses.map((course) => (
          <span key={course.name.length} className={"course-list-child"}>
            <NavLink to={`/courses/${course.name}`}>{course.name}</NavLink>
          </span>
        ))}
      </Stack>
    </>
  );
};

export default CourseList;
