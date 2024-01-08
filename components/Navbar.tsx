import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full">
      <header className="flex p-3 container mx-auto items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold">Blog</h1>
        </Link>
        <ModeToggle />
      </header>
    </div>
  );
};

export default Navbar;
