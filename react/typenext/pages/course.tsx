import { PrismaClient, Course } from "@prisma/client";
import React, { useState } from "react";
const prisma = new PrismaClient();
const course = ({ data }: { data: Course[] }) => {
  const [single, setSingle] = useState({
    id: "",
    Course_name: "",
    fees: 0,
  } as Course);
  async function handleSubmit(course: Course) {
    const res = await fetch("api/course", {
      method: "POST",
      body: JSON.stringify(course),
    });
    return await res.json();
  }
  return (
    <div>
      <h2>Showing Course Details</h2>
      <form onSubmit={() => handleSubmit(single)}>
        <input
          type="number"
          placeholder="id"
          value={single.id}
          onChange={(e) => setSingle({ ...single, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="name"
          value={single.Course_name}
          onChange={(e) =>
            setSingle({ ...single, Course_name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="fees"
          value={single.fees}
          onChange={(e) => {
            setSingle({ ...single, fees: Number(e.target.value) });
          }}
        />
        <input type="submit" />
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h5>{item.Course_name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default course;
export async function getServerSideProps() {
  const data = await prisma.course.findMany();
  return {
    props: {
      data,
    },
  };
}
