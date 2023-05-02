import React from "react";
import portfoliohero from "../images/portfolio-hero.jpg";
const Hero = () => {
  return (
    <div
      className="md:h-[35vh] h-[15vh] bg-fixed bg-top md:text-7xl text-5xl font-bold text-white bg-cover flex justify-center items-center "
      style={{ backgroundImage: `url(${portfoliohero})` }}
    >
      <div className="bg-black/50 md:h-[35vh] h-[15vh] pt-[10%] flex justify-center items-center w-[100%]">
        PORTFOLIO
      </div>
    </div>
  );
};

export default Hero;
