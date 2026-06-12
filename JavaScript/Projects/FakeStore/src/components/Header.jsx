import React from "react";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between  p-3">
        <div className=" flex">
          <FaStore className="ms-5 size-7 text-yellow-500" />
          <span className="text-red-600 ">Fake Store App</span>
        </div>
        <div className="flex gap-3">
          <Link
            to={"/"}
            className=" text-pink-500 hover:underline focus:text-yellow-500"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className=" text-pink-500 hover:underline focus:text-yellow-500"
          >
            About
          </Link>
          <Link
            to={"/contactUs"}
            className=" text-pink-500 hover:underline focus:text-yellow-500"
          >
            ContactUs
          </Link>
          <Link
            to={"/products"}
            className="  text-pink-500 hover:underline focus:text-yellow-500"
          >
            Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
