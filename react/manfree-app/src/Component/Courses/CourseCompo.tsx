import { Container, Stack } from "@mui/material";
import AboutCourse from "./AboutCourse";
import CourseDetail from "./CourseDetail";
import CourseHeader from "./CourseHeader";
import CourseSyllabus from "./CourseSyllabus";
const CourseCompo = () => {
  return (
    <Container>
      <CourseHeader />
      <Stack direction={"row"}>
        <Stack maxWidth={"md"}>
          <CourseDetail />
          <CourseSyllabus />
        </Stack>
        <Stack minWidth={"xl"}>
          <AboutCourse />
        </Stack>
      </Stack>
    </Container>
  );
};

export default CourseCompo;
