import React from "react";
import { Link } from "react-router-dom";
const About = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div id="about" className="flex md:flex-row my-2 md:my-0 flex-col">
      <div className="md:w-[50%] my-8 md:m-0 w-[80%] mx-auto h-[80vh]  flex flex-col  justify-center items-center">
        <div
          className="md:m-8 m-2 md:p-12  p-4 bg-white   "
          style={{
            border: "3px solid black",
          }}
        >
          <div className="flex text-[#CCCCCC] gap-1 font-bold text-7xl">
            <p className="text-black">About</p>
            Me
          </div>
          <p className="bg-black h-1 w-24"></p>
          <p className="my-4">
            Uncommonly surrounded considered for him are its. It we is read good
            soon. My to considered delightful invitation announcing of no
            decisively boisterous. Ecstatic advanced and procured civility not
            absolute put continue. <strong>Advantages so impression</strong> .
            Almost unable put piqued talked likely houses her met. Abilities
            forfeited situation extremely my to he resembled. Old had conviction
            discretion understood put principles you.{" "}
            <strong>Ecstatic advanced</strong> and procured civility not
            absolute put continue. Advantages so impression. Almost unable put
            piqued talked likely houses her met.
          </p>
        </div>
      </div>
      <div className="md:w-[50%] w-[90%] mx-auto bg-[#333333] text-white text-3xl   flex flex-col justify-center items-center">
        <div className="flex justify-center  ">
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("brands")}
            className="flex justify-center uppercase items-center h-[250px] w-[50%] p-12
            hover:bg-white hover:text-black cursor-pointer transition
            ease-in-out duration-500"
            style={{
              borderBottom: "3px solid white",
            }}
          >
            brands
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("studio")}
            className="flex uppercase justify-center items-center h-[250px] w-[50%] p-12
            hover:bg-white hover:text-black cursor-pointer transition
            ease-in-out duration-500"
            style={{
              borderBottom: "3px solid white",
              borderLeft: "3px solid white",
            }}
          >
            studio
          </Link>
        </div>
        <div className="flex justify-center  ">
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("nature")}
            className="flex justify-center uppercase items-center h-[250px] w-[50%] p-12 hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
          >
            nature
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setPortfolioSelected("events")}
            className="flex justify-center uppercase items-center h-[250px] w-[50%] p-12 hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
            style={{
              borderLeft: "3px solid white",
            }}
          >
            events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
