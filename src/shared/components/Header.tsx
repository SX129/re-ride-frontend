import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link href="/" className="link-style">RE•RIDE</Link>
        <Link href="https://www.google.com/" className="link-style">
          DRIVE
        </Link>
        <Link href="https://www.google.com/" className="link-style">
          RIDE
        </Link>
      </nav>
      <nav></nav>
      <nav>
        <Link href="https://www.google.com/" className="link-style">
          LOG IN
        </Link>
        <Link href="https://www.google.com/" className="link-style">
          SIGN UP
        </Link>
      </nav>
    </div>
  );
};

export default Header;
