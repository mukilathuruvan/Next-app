import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <nav>
      {/* <Link href="/">
        <a>Home</a>
      </Link> */}
      {/* <Link href="/nested/login">
        <a>Login</a>
      </Link> */}
      <Link href={`/admin/${300}`}>
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Header;
