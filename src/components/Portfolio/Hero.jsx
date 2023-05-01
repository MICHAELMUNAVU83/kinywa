import React from "react";
import portfoliohero from "../images/portfolio-hero.jpg";
const Hero = () => {
  return (
    <div
      className="h-[35vh] bg-fixed bg-top text-7xl font-bold text-white bg-cover flex justify-center items-center "
      style={{ backgroundImage: `url(${portfoliohero})` }}
    >
      <div className="bg-black/50 h-[35vh] flex justify-center items-center w-[100%]">
        PORTFOLIO
      </div>
    </div>
  );
};

export default Hero;
