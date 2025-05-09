import React from "react";
import { Link } from "react-router";
import { FaAmazon } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <FaAmazon className="text-4xl text-indigo-700" />
          <span className="ml-3 text-xl">ReCommerce</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to={"/cart"} className="mr-5 hover:text-white">
            Cart
          </Link>
        </nav>
        <button className="inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-800 rounded cursor-pointer text-white mt-4 md:mt-0 gap-x-1">
         <span>Login</span> <FiLogIn/>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
