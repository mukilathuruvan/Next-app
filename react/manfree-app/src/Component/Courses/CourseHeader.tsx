import { Button, Stack } from "@mui/material";
import pic from "../../img/one.jpg";
const CourseHeader = () => {
  return (
    <Stack
      height={"150px"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"20px"}>
      <img src={pic} alt="" height={"100px"} />
      <Stack direction={"row"} spacing={2}>
        <Button variant="outlined" href="/courses">
          Courses
        </Button>
        <Button variant="outlined" href="/contact" color="primary">
          Contact Us
        </Button>
      </Stack>
    </Stack>
  );
};

export default CourseHeader;
