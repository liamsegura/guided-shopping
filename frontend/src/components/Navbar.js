import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-8 md:px-16">
      <div className="flex justify-between items-center">
        <div className="text-indigo-500 font-bold text-xl">guided</div>

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
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            Products
          </a>
          <a href="#" className="hover:text-gray-200">
            About
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <a
            href="#"
            className="block px-4 py-2 text-black rounded-md hover:bg-indigo-500 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-black rounded-md hover:bg-indigo-500 hover:text-white"
          >
            Products
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-black rounded-md hover:bg-indigo-500 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-black rounded-md hover:bg-indigo-500 hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
