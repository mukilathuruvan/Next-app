import { Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
type propType = {
  title: string;
  content: string;
};
const Single = ({ title, content }: propType) => {
  return (
    <Stack textAlign={"left"} spacing={1.5}>
      <Typography variant="h6" fontWeight={"780"}>{title}</Typography>
      <Typography >{content}</Typography>
    </Stack>
  );
};
const AboutCourse = () => {
  return (
    <Stack spacing={4}>
      <Single title={"Course Duration"} content={"360Hrs"} />
      <Single title={"Skill Level"} content={"Beginner"} />
      <Single title={"Prerequisite"} content={"Anyone can learn."} />
    </Stack>
  );
};

export default AboutCourse;
