import { useRouter } from "next/router";
import React from "react";

const CourseCompo = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>data is fetching ... page will be shown soon</h2>;
  }
  return (
    <div>
      <h2>Showing Intidual page</h2>
      <h5>{data.title}</h5>
    </div>
  );
};

export default CourseCompo;

export async function getStaticPaths() {
  //   const paths = [
  //     { params: { courseId: "1" } },
  //     { params: { courseId: "2" } },
  //     { params: { courseId: "3" } },
  //     { params: { courseId: "4" } },
  //     { params: { courseId: "5" } },
  //   ];
  const paths = [];
  for (let i = 1; i <= 5; i++) {
    paths.push({ params: { courseId: `${i}` } });
  }
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.courseId}`
  );
  const data = await response.json();
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
