import React from "react";
import Header from "../../components/Header";

const Second = ({ data }) => {
  return (
    <div>
      <Header/>
      <div>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
    </div>
  );
};

export default Second;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();
  console.log(data);
  return { props: { data } };
}
