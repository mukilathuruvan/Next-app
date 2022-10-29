import { useRouter } from "next/router";
import React from "react";

const RevIdCompo = () => {
  const router = useRouter();
  const { userId, revId } = router.query;
  console.log(revId);

  return (
    <div>
      showing person {userId} and review {revId}
    </div>
  );
};

export default RevIdCompo;
