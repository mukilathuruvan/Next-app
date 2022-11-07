import { PrismaClient, Student } from "@prisma/client";
import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { prisma } from "./api/student";
type stud = {
  department: string;
  course: string;
};
const FormCompo = ({ data }: { data: Student[] }) => {
  const [student, setStudent] = useState({
    name: "",
    department: "",
    course: "",
  });
  const createStudent = async (student: stud) => {
    console.log(student);
    const res = await fetch("api/student", {
      method: "POST",
      body: JSON.stringify(student),
    });
    return await res.json();
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createStudent(student);
        }}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">Department</label>
          <input
            type="text"
            onChange={(e) =>
              setStudent({ ...student, department: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="">Course</label>
          <input
            type="text"
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
          />
        </div>
        <input type="submit" />
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <u>{item.name} - </u>
            <em>{item.course} </em> -<strong>{item.department}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FormCompo;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data = await prisma.student.findMany();
  return {
    props: {
      data,
    },
  };
};
