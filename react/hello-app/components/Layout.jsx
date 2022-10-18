import React from "react";
import Link from "next/link";
const Layout = () => {
  return (
    <div>
      <Link href={"/contact"}>
        <a>Go to Page</a>
      </Link>
    </div>
  );
};

export default Layout;
