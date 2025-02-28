"use client"

import Link from "next/link";
import React from "react";


const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header">
      <nav>
        <a className="link-style" onClick={scrollToTop} style={{cursor:"pointer"}}>
          RE•RIDE
        </a>
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
