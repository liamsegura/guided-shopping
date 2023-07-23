import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-8 md:px-16">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="text-indigo-600 font-bold text-xl">Guided</div>
        </Link>
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>

        {/* Full Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to={"/"} className="hover:text-gray-600">
            About
          </Link>
          <Link to={"/"} className="hover:text-gray-600">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link
            to={"/"}
            className="block px-4 py-2 text-black rounded-md hover:bg-indigo-500 hover:text-white"
          >
            About
          </Link>
          <Link
            to={"/"}
            className="block px-4 py-2 text-black rounded-md hover:bg-indigo-500 hover:text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
