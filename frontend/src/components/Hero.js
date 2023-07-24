import ScrollButton from "./ScrollButton";
import React, { useContext } from "react";
import EventContext from "../EventContext";

function Hero() {
  const { handleProductButtonClick } = useContext(EventContext);

  return (
    <div className="flex flex-col py-40 px-10 md:flex-row items-center justify-center py-10 md:py-20">
      <div className="flex flex-col items-center justify-center sm:items-start md:justify-start">
        <h1 className="text-3xl md:text-6xl font-bold">
          Welcome to <span className="text-emerald-600">Guided</span>
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Finding the perfect product for you
        </p>
        <ScrollButton onClick={handleProductButtonClick} />
      </div>
      <div className="mt-6 md:mt-0 md:ml-10 hidden md:block">
        <img src="/sky.jpg" alt="phone" className="w-64 md:w-96" />
      </div>
    </div>
  );
}

export default Hero;
