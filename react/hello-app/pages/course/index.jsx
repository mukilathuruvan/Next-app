import React from "react";

const CoursePage = ({ data }) => {
  return (
    <div>
      <h2>Showing Course List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.id}</h2>
            <h6>{item.title}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
