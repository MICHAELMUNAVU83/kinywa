import React from "react";
import herobg from "../images/herobg.jpg";
import logo from "../images/logo.png";
const Hero = () => {
  return (
    <div
      className="h-[100vh]  bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="flex justify-betweeen p-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-36 " />
          <div className="flex flex-col justify-between ml-2">
            <h1 className="text-2xl font-bold text-white">Brian Kinywa</h1>
            <p className="text-sm text-white">photographer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
