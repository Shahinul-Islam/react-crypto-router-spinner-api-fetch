import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
// import { CustomLink } from "../CustomCustomLink/CustomCustomLink";

const Header = () => {
  return (
    <nav className="flex justify-between p-8">
      <div>
        <Link to="/" className="mx-5 text-2xl font-mono font-semibold text-gray-500 cursor-pointer">
          Crypto Cafe
        </Link>
      </div>
      <div className="flex text-xl">
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
