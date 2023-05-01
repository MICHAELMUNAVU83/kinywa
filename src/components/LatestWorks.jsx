import React from "react";
import CountUp from "react-countup";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlinePicture } from "react-icons/ai";
import { IoAlbumsOutline } from "react-icons/io5";
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
        <div className="w-1/3 bg-red-500 h-[80vh]"></div>
        <div className="w-1/3 bg-blue-500 h-[80vh]"></div>
        <div className="w-1/3 bg-yellow-500 h-[80vh]"></div>
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
