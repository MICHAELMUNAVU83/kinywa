import React from "react";
import herobg from "../images/herobg.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="h-[100vh] bg-fixed  bg-cover  "
      id="home"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className=" items-end  flex h-[100vh] bg-black/50 flex-col justify-center p-10 text-white  ">
        <div className="flex flex-col items-start">
          <div className="text-7xl flex gap-2 font-bold">
            <span className="text-[#CCCCCC] ">I'm</span>
            Brain Kinywa
          </div>
          <div className="text-3xl text-center font-bold">
            I create art with photography
          </div>
          <Link
            to="/portfolio"
            className="text-black underline  text-3xl mt-4  text-white cursor-pointer  transition ease-in-out duration-500   "
          >
            {">"} View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
