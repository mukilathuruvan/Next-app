import { Bike, PrismaClient } from "@prisma/client";
import React, { useState } from "react";
const prisma = new PrismaClient();

async function createBike(con: Bike) {
  const res = await fetch("/api/bikes", {
    method: "POST",
    body: JSON.stringify(con),
  });
  return await res.json();
}

const List = ({ data }: { data: Bike[] }) => {
  const [bikes, setBikes] = useState(data);
  const [bike, setBike] = useState({} as Bike);
  return (
    <div>
      <form onSubmit={() => createBike(bike)}>
        <input
          type="text"
          value={bike.brand}
          onChange={(e) => setBike({ ...bike, brand: e.target.value })}
        />
        <input
          type="text"
          value={bike.model}
          onChange={(e) => setBike({ ...bike, model: e.target.value })}
        />
        <input type="submit" />
      </form>
      <ul>
        {bikes.map((item) => (
          <li key={item.id}>
            <h3>{item.brand + " " + item.model}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
export async function getStaticProps() {
  const data = await prisma.bike.findMany();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
