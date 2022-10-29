import Link from "next/link";
import React from "react";

const ModelPage = ({ posts }) => {
  return (
    <div>
      <h2>this is Model Home Page</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <>
              <Link href={`/model/${item.id}`}>
                <a>{item.id}</a>
              </Link>
              <p>{item.title}</p>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};
``;
export default ModelPage;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
