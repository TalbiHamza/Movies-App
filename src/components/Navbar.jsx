import React from "react";
import Fire from "../assets/fire.png";
import Star from "../assets/glowing-star.png";
import Party from "../assets/partying-face.png";
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
  return (
    <>
      <nav className="h-16 flex justify-between items-center py-0 px-8 border-b border-b-gray-300">
        <h1 className="text-2xl text-heading_color font-semibold">
          MovieManiac
        </h1>
        <div className="flex items-center ">
          <DarkMode />
          <a href="#popular" className="flex  items-center px-6">
            Popular <img className="w-6 h-6 ml-1" src={Fire} alt="" />
          </a>
          <a href="#top_rated" className="flex  items-center px-6">
            Top Rated <img className="w-6 h-6 ml-1" src={Star} alt="" />
          </a>
          <a href="#upcoming" className="flex  items-center px-6">
            Upcoming <img className=" w-6 h-6 ml-1" src={Party} alt="" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
