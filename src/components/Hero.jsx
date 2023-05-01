import React from "react";
import herobg from "../images/herobg.jpg";
import logo from "../images/logo.png";
import { FiMenu } from "react-icons/fi";
const Hero = () => {
  return (
    <div
      className="h-[100vh]  bg-cover  "
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-36 " />
          <div className="flex flex-col justify-between ml-2">
            <h1 className="text-2xl font-bold text-white">Brian Kinywa</h1>
            <p className="text-sm text-white">photographer</p>
          </div>
        </div>
        <div>
          <FiMenu className="text-white font-bold cursor-pointer  hover:scale-105 transition-all duration-300  text-5xl" />
        </div>
      </div>

      <div className=" items-end flex flex-col p-10 text-white mt-[10%] place-self-start">
        <div className="text-7xl flex gap-2 font-bold">
          <span className="text-[#CCCCCC] ">I'm</span>
          Brain Kinywa
        </div>
        <div className="text-3xl text-start font-bold">I do amazing photography</div>
      </div>
    </div>
  );
};

export default Hero;
