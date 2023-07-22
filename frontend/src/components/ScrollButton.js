import React from 'react';
import { Link } from 'react-scroll';

const ScrollButton = () => {
  return (
    <div className="flex justify-center mt-6">
      <Link
        activeClass="active"
        to="sectionBelow"
        spy={true}
        smooth={true}
        offset={-70} // Offset for the sticky navbar, adjust as needed
        duration={500} // Scroll duration in milliseconds
        className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer"
      >
        View Products
      </Link>
    </div>
  );
};

export default ScrollButton;
