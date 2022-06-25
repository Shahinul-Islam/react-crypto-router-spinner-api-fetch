import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex flex-row-reverse md:flex-row justify-between p-8 bg-orange-400 text-left items-center">
      <div className="md:hidden h-10 w-10 ml-auto" onClick={() => setOpen(!open)}>
        {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
      </div>
      <div>
        <Link to="/" className={`text-2xl font-mono font-semibold text-gray-500 cursor-pointer ${open ? "hidden" : "static"}`}>
          Crypto Cafe
        </Link>
      </div>
      <div className={`md:flex text-xl justify-end absolute md:static w-2/3 ${open ? "left-5" : "top-[-200px]"} ${open ? "top-20" : "top-[-200px]"}`}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/coins">Coins</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
      <Outlet></Outlet>
    </nav>
  );
};

export default Header;
