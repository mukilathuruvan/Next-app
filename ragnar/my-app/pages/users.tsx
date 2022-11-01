import React, { ChangeEvent, useState } from "react";
import { PrismaClient } from "@prisma/client";

type single = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};
type dataType = {
  contacts: single[];
};
const prisma = new PrismaClient();
export async function getStaticProps() {
  const contacts = await prisma.user.findMany();
  console.log(contacts);
  return {
    props: {
      contacts,
    },
  };
}
async function createUser(newUser: single) {
  const response = await fetch("api/users", {
    method: "POST",
    body: JSON.stringify(newUser),
  });
  // if (!response.ok) {
  //   throw new Error("invalid user details");
  // }
  return await response.json();
}

const UserPage = ({ contacts }: dataType) => {
  console.log("rendering");
  const [users, setUsers] = useState(contacts);
  const [user, setUser] = useState({} as single);
  return (
    <div>
      <form onSubmit={() => createUser(user)}>
        <div>
          <input
            type="text"
            placeholder="first name"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="last name"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <input
            type="text"
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button type="submit">Add User</button>
        </div>
      </form>

      <h2>showing userpage</h2>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <p>{item.firstName + item.lastName}</p>
            {/* <h4>{item.email}</h4> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
