import React from "react";

const UserList = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h2>showing UserList</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return { props: { posts: data } };
}
