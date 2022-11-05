import React from "react";
import { Link, useParams } from "react-router-dom";

const Single = () => {
  const { userId } = useParams();
  return (
    <div>
      Showing Page of {userId} user
      <Link to={"/contact/users"} replace>
        Go Back
      </Link>
    </div>
  );
};

export default Single;
