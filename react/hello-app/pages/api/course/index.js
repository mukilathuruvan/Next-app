export default function (req, res) {
  const courses = {
    one: { name: "python", fees: 2000 },
    two: { name: "web dev", fees: 300 },
    three: { name: "java", fees: 500 },
  };
  res.status(200).json(courses);
}
