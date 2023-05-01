import React from "react";
import CountUp from "react-countup";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlinePicture } from "react-icons/ai";
import { IoAlbumsOutline } from "react-icons/io5";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";

import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";

const LatestWorks = () => {
  return (
    <div className="group">
      <div className="bg-black text-start flex flex-col  items-end  p-12">
        <h1 className="text-5xl   text-white text-[#CCCCCC]  font-bold  flex gap-2 ">
          <p className="text-white">Latest</p> Works
        </h1>
        <p className="bg-white group-hover:block hidden transition-all duration-500   h-1 w-10"></p>
      </div>
      <div className="flex">
        <div className="w-1/3 flex flex-col bg-red-500 ">
          <img src={pic5} alt="pic1" className="h-[40vh] object-cover object-top  w-[100%]" />
          <img src={pic1} alt="pic2" className="h-[60vh] object-cover object-center  w-[100%]" />
          <img src={pic6} alt="pic3" className="h-[40vh] object-cover object-top  w-[100%] object-center" />
        </div>
        <div className="w-1/3 bg-blue-500 ">
          <img src={pic7} alt="pic1" className="h-[60vh] object-cover  w-[100%]" />
          <img src={pic9} alt="pic2" className="h-[40vh] object-cover   w-[100%]" />
          <img src={pic4} alt="pic3" className="h-[40vh] object-cover  w-[100%]" />
        </div>
        <div className="w-1/3 bg-yellow-500 ">
          <img src={pic8} alt="pic1" className="h-[40vh] object-cover object-top  w-[100%]" />
          <img src={pic2} alt="pic2" className="h-[40vh] object-cover object-center  w-[100%]" />
          <img src={pic3} alt="pic3" className="h-[60vh] object-cover  w-[100%]" />
        </div>
      </div>
      <div className=" bg-[#333333] ">
        <div className=" flex justify-center  p-8  uppercase   gap-4 text-white">
          <div
            className="flex  gap-2 p-8"
            style={{
              borderRight: "1px solid white",
            }}
          >
            <HiUserGroup className="text-7xl" />
            <div className="flex  flex-col">
              <p className="font-bold text-5xl">
                <CountUp end={128} duration={10} /> +
              </p>
              <div className="flex text-[#BCBCBC] gap-2">
                <p>Happy</p>
                <p>Clients</p>
              </div>
            </div>
          </div>
          <div
            className="flex  gap-2 p-8"
            style={{
              borderRight: "1px solid white",
            }}
          >
            <AiOutlinePicture className="text-7xl" />
            <div className="flex flex-col">
              <p className="font-bold text-5xl">
                <CountUp end={8792} duration={10} /> +
              </p>
              <div className="flex text-[#BCBCBC] gap-2">
                <p>Sunsets</p>
                <p>Captured</p>
              </div>
            </div>
          </div>
          <div className="flex  gap-2 p-8">
            <IoAlbumsOutline className="text-7xl" />
            <div className="flex flex-col">
              <p className="font-bold text-5xl">
                <CountUp end={986} duration={10} /> +
              </p>
              <div className="flex gap-2">
                <p>Albums</p>
                <p>Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorks;
