import React from "react";
import herobg from "../images/herobg.jpg";
import logo from "../images/logo.png";

const Hero = () => {
  return (
    <div
      className="h-[100vh] bg-fixed  bg-cover  "
      id="home"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className=" items-end flex flex-col p-10 text-white pt-[18%] place-self-start">
        <div className="text-7xl flex gap-2 font-bold">
          <span className="text-[#CCCCCC] ">I'm</span>
          Brain Kinywa
        </div>
        <div className="text-3xl text-start font-bold">
          I create art with photography
        </div>
      </div>
    </div>
  );
};

export default Hero;
