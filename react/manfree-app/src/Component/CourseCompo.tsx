import { countReset } from "console";
import React from "react";

import { useParams } from "react-router-dom";
import { courses } from "../Context/GlobalStore";
const CourseCompo = () => {
  const { courseName } = useParams();
  const course = courses.find((item) => item.name === courseName);
  return (
    <div className="alone-course-container">
      <div>
        <h3>{course?.name}</h3>
      </div>

    </div>
  );
};

export default CourseCompo;
