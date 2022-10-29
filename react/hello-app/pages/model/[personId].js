import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PersonPage = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>Loading the Page</h2>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.id}</h3>
      <Link href={"/model"}>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default PersonPage;
export async function getStaticPaths() {
  const paths = [];
  for (let i = 1; i <= 5; i++) {
    paths.push({ params: { personId: `${i}` } });
  }
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.personId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
