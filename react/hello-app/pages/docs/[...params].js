import React from "react";
import { useRouter } from "next/router";
const HomePage = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 1) return <h3>First Layer {params[0]}</h3>;
  if (params.length === 2) {
    return (
      <h3>
        First is {params[0]} and second is {params[1]}
      </h3>
    );
  }
  if (params.length === 3) {
    const [first = "", second = "", third = ""] = params;
    return (
      <>
        <h1>{first}</h1>
        <h3>{second}</h3>
        <h6>{third}</h6>
      </>
    );
  }
  return <div> showing docs Home Page</div>;
};

export default HomePage;
