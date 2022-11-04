import { PrismaClient, Todo } from "@prisma/client";
import React, { useState } from "react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

const Index = ({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [todo, setTodo] = useState({ done: false } as Todo);
  const [items, setItems] = useState(todos);
  const router = useRouter();
  async function createTask(task: Todo) {
    const res = await fetch("api/todo", {
      method: "POST",
      body: JSON.stringify(task),
    });
    refreshData();
    return await res.json();
  }
  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <div>
      <h1>index Page</h1>
      <form onSubmit={() => createTask(todo)}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          type="radio"
          onClick={() => {
            setTodo({ ...todo, done: true });
          }}
        />
        Done
        <input type="submit" />
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.done && <span>fineshed</span>}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params, req, res } = context;
  res.setHeader("Set-Cookie", ["name=mukilan"]);
  console.log(context);
  const todos: Todo[] = await prisma.todo.findMany();
  return {
    props: {
      todos,
    },
  };
};
