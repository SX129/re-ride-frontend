"use client";

import { Link } from "next-view-transitions";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./shadcn/NavigationMenu";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header-section">
      {isMobile ? (
        <>
          <Link href="/" className="link-style">
            RE•RIDE
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger></NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-max text-white">
                  <NavigationMenuLink href="/" className="link-style">
                    DRIVE
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/" className="link-style">
                    RIDE
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/login" className="link-style">
                    LOG IN
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/signup" className="link-style">
                    SIGN UP
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </>
      ) : (
        <>
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
            <Link href="/login" className="link-style">
              LOG IN
            </Link>
            <Link href="/signup" className="link-style">
              SIGN UP
            </Link>
          </nav>
        </>
      )}
    </div>
  );
};

export default Header;
