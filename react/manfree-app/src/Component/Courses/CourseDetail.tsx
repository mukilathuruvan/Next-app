import { Container, Typography, Stack } from "@mui/material";

const CourseDetail = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <Typography marginLeft={"-20px"} variant="h4" textAlign={"left"}>
          Certified Front-end Engineer Associate
        </Typography>
        <Stack spacing={1}>
          <Typography variant="h5" textAlign={"left"} marginLeft={"-20px"}>
            What is Front-end development?
          </Typography>
          <Typography variant="body1" textAlign={"left"}>
            A front-end developer is a professional who is responsible for the
            design and implementation of the user interface. Front-end
            development is of three fundamental languages CSS, HTML, and
            JavaScript. The developer will consider different aspects during
            development like different browsers (cross-browser), different
            operating systems (cross-platform), and different devices
            (cross-device).
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h5" textAlign={"left"} marginLeft={"-20px"}>
            Why is Front-end development?
          </Typography>
          <Typography variant="body1" textAlign={"left"}>
            The average base pay for the front-end development in india is
            arounf ₹5,00,000. The career path for front-end development is
            exciting and there is lot of demand. The demand for the front end
            developer is increasing every year. The possible career paths after
            learning Javascript are web development, backend development, full
            stack devlopment, mobile app development and blockchain development.
            (cross-device).
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CourseDetail;
