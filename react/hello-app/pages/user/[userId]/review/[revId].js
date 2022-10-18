import { useRouter } from "next/router";
import React from "react";

const revId = () => {
  const router = useRouter();
  const { userId, revId } = router.query;
  console.log(revId);

  return (
    <div>
      showing person {userId} and review {revId}
    </div>
  );
};

export default revId;
