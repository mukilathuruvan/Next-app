import { Todo } from "@prisma/client";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState<null | Todo[]>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPost = async () => {
      const result = await fetch("/api/person");
      const det = await result.json();
      setData(det);
      setLoading(false);
    };
    getPost();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  if (!data) {
    return <h3>Fetching Data</h3>;
  } else {
    return (
      <div>
        <ul>
          {data.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Profile;

