import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const initialValue = [
  { id: 1, name: "senthil" },
  { id: 2, name: "karthick" },
  { id: 3, name: "sankar" },
  { id: 4, name: "virat kohli" },
];
const Contact = () => {
  const [users, setUsers] = useState(initialValue);
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link to={`/contact/users/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Contact;
