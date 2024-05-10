import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p-4 bg-black text-white justify-between">
      <Link href={"/"}><div className="font-bold">Amazon Tracker</div></Link>
      <ul className="flex gap-5 justify-between">
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/"}><li>About</li></Link>
        <Link href={"/"}><li className="mr-2">Contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
