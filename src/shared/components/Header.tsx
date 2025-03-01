import { Link } from "next-view-transitions";
import React from "react";

const Header = () => {
  return (
    <div className="header-section">
      <nav>
        <Link href="/" className="link-style">
          RE•RIDE
        </Link>
        {/* <Link href="/info/drive" className="link-style">
          DRIVE
        </Link>
        <Link href="/info/ride" className="link-style">
          RIDE
        </Link> */}
        <Link href="/" className="link-style">
          DRIVE
        </Link>
        <Link href="/" className="link-style">
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
