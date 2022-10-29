import Link from "next/link";
import React from "react";

const BlockList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`blocks/${item.id}`} passHref>
            <div>
              <h1>{item.id}</h1>
              <h4>{item.title}</h4>
            </div>
          </Link>
          <hr />
        </li>
      ))}
    </div>
  );
};

export default BlockList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: { data: data.slice(0, 4) },
  };
}
