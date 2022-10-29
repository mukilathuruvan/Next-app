import { useRouter } from "next/router";
import React from "react";

const HomeCompo = () => {
  const route = useRouter();
  const { userId = "" } = route.query;
  return <div>showing admin ulla irukka userid page{userId}</div>;
};

export default HomeCompo;
