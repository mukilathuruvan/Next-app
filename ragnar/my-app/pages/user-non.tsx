import { Todo } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
type stud = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const UserCompo = () => {
  const [data, setData] = useState<stud[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = await res.data;
      setData(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>
            <em>{item.title}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCompo;
