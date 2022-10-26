import { Stack, Typography } from "@mui/material";
import SyllabusAcc from "./SyllabusAcc";
const CourseSyllabus = () => {
  return (
    <Stack spacing={2} marginY={"10px"}>
      <Typography variant="h5" textAlign={"left"}>
        Syllabus
      </Typography>
      <Stack>
        <SyllabusAcc />
        <SyllabusAcc />
        <SyllabusAcc />
        <SyllabusAcc />
        <SyllabusAcc />
      </Stack>
    </Stack>
  );
};

export default CourseSyllabus;
