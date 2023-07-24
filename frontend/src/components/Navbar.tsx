import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-8 px-8 md:px-16">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="text-emerald-600 font-bold text-2xl">Guided</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
