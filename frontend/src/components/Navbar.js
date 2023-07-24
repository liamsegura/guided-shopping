import { Link } from "react-router-dom";
import React, { useContext } from "react";
import EventContext from "../EventContext";

const Navbar = () => {
  const { handleHome } = useContext(EventContext);

  return (
    <nav className="py-8 px-8 md:px-16">
      <div className="flex justify-between items-center">
        <Link onClick={handleHome} to={"/"}>
          <div className="text-emerald-600 font-bold text-2xl">Guided</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
