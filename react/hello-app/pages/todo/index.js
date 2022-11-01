import React from "react";
import axios from "axios";
const TodoPage = ({ data }) => {
  return (
    <div>
      <h2>REst APi is showing</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;

export async function getStaticProps() {
  const response = await axios.get("http://localhost:8000/api/todos");
  const data = await response.data
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
