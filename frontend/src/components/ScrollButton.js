import React from "react";
import { Link } from "react-scroll";

const ScrollButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-6">
      <Link
        onClick={onClick}
        activeClass="active"
        to="sectionBelow"
        spy={true}
        smooth={true}
        offset={-70} // Offset for the sticky navbar, adjust as needed
        duration={500} // Scroll duration in milliseconds
        className="px-6 py-3 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-200 focus:ring-opacity-50 cursor-pointer"
      >
        View Products
      </Link>
    </div>
  );
};

export default ScrollButton;
