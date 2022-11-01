import { Bike, PrismaClient } from "@prisma/client";
import React, { useState } from "react";
const prisma = new PrismaClient();

async function createBike(bike: Bike) {
  const response = await fetch("api/bikes", {
    method: "POST",
    body: JSON.stringify(bike),
  }); 

  return await response.json();
}
const BikesList = ({ data }: { data: Bike[] }) => {
    const [bikes, setBikes] = useState(data)
    
    const [bike, setBike] = useState({} as Bike);
    console.log(bikes)
  return (
    <div>
      <h2>showing bike page</h2>

      <form onSubmit={() => createBike(bike)}>
        <input
          type="text"
          value={bike.brand}
          placeholder={"brand"}
          onChange={(e) => setBike({ ...bike, brand: e.target.value })}
        />
        <input
          type="text"
          placeholder={"model"}
          value={bike.model}
          onChange={(e) => setBike({ ...bike, model: e.target.value })}
        />
        <input type="submit" />
      </form>

      <ul>
        {bikes.map((item) => (
          <li key={item.id}>
            <h4>
              brand : {item.brand} <div>model :{item.model}</div>
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BikesList;

export async function getStaticProps() {
  const data = await prisma.bike.findMany();
  return {
    props: {
      data,
    },
  };
}
