import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import EventContext from "../EventContext";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { handleHome } = useContext(EventContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <>
      <nav className="py-8 px-8 md:px-16 ">
        <div className="flex justify-between items-center">
          <Link onClick={handleHome} to={"/"}>
            <div className="text-emerald-600 font-bold text-2xl">Guided</div>
          </Link>
          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={handleMenuClick} className="block text-gray-500">
              {showMenu ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Top line */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16"
                  />
                  {/* Middle line */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12h16"
                  />
                  {/* Bottom line */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Links for larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <Link onClick={handleHome} to={"/"}>
              <div className="px-4 py-2">Home</div>
            </Link>
            <Link
              to={"https://github.com/liamsegura/guided-shopping"}
              target="_blank"
            >
              <div className="px-4 py-2">Contribute</div>
            </Link>
            {/* Add more menu links here */}
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-lg border hover:bg-emerald-400"
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={darkMode ? "dark-mode" : ""}>
        <div
          className={`${
            darkMode ? "bg-black text-white" : "bg-white"
          } fixed z-50 top-0 right-0 h-full w-64 shadow-lg transform ${
            showMenu
              ? "translate-x-0 transition-transform duration-300"
              : "translate-x-full transition-transform duration-300"
          }`}
        >
          <div className="flex flex-col items-end mt-20 py-4 px-4 space-y-4">
            <Link onClick={handleHome} to={"/"}>
              <div onClick={handleMenuClick} className="block mr-4">
                Home
              </div>
            </Link>
            <Link
              onClick={handleHome}
              to={"https://github.com/liamsegura/guided-shopping"}
              target="_blank"
            >
              <div onClick={handleMenuClick} className="block mr-4">
                Contribute
              </div>
            </Link>
            {/* Add more menu links here */}
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-lg border hover:bg-emerald-400"
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
          {/* X close icon */}
          <button
            onClick={handleMenuClick}
            className="absolute top-9 right-8 text-gray-500 md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Dark overlay */}
      {showMenu && (
        <div
          className="fixed z-40 inset-0 bg-black opacity-25"
          onClick={handleMenuClick}
        ></div>
      )}
    </>
  );
};

export default Navbar;
