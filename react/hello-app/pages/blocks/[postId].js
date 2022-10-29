import Link from "next/link";
import React from "react";

const Solo = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <h4>{data.body}</h4>
      <Link href={"/blocks"}>
        <a>back to list</a>
      </Link>
    </div>
  );
};

export default Solo;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
