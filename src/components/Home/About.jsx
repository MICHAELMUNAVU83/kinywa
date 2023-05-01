import React from "react";

const About = () => {
  return (
    <div id="about" className="flex">
      <div className="w-[50%] h-[80vh]  flex flex-col  justify-center items-center">
        <div
          className="m-8 p-12  bg-white   "
          style={{
            border: "3px solid black",
          }}
        >
          <div className="flex text-[#CCCCCC] gap-1 font-bold text-7xl">
            <p className="text-black">About</p>
            Me
          </div>
          <p className="bg-black h-1 w-10"></p>
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
      <div className="w-[50%] bg-[#333333] text-white text-3xl   flex flex-col justify-center items-center">
        <div className="flex justify-center  ">
          <div
            className="flex justify-center items-center h-[250px] w-[250px] hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
            style={{
              borderBottom: "3px solid white",
            }}
          >
            BRANDS
          </div>
          <div
            className="flex justify-center items-center h-[250px] w-[250px] hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
            style={{
              borderBottom: "3px solid white",
              borderLeft: "3px solid white",
            }}
          >
            STUDIO
          </div>
        </div>
        <div className="flex justify-center  ">
          <div className="flex justify-center items-center h-[250px] w-[250px] hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500">
            NATURE
          </div>
          <div
            className="flex justify-center items-center h-[250px] w-[250px] hover:bg-white hover:text-black cursor-pointer  transition ease-in-out duration-500"
            style={{
              borderLeft: "3px solid white",
            }}
          >
            EVENTS
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
