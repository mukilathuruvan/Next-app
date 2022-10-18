import { useRouter } from "next/router";
import React from "react";

const UserId = () => {
  const router = useRouter();
  const { userId } = router.query;
  return <h2>Showing UserId -{userId}</h2>;
};

export default UserId;
