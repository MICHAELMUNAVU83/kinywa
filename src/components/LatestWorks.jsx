import React from "react";

const LatestWorks = () => {
  return (
    <div className="group">
      <div className="bg-black text-start flex flex-col  items-end  p-12">
        <h1 className="text-5xl   text-white text-[#CCCCCC]  font-bold  flex gap-2 ">
          <p className="text-white">Latest</p> Works
        </h1>
        <p className="bg-white group-hover:block hidden transition-all duration-500   h-1 w-10">
          uhjikp
        </p>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-red-500 h-[80vh]"></div>
        <div className="w-1/3 bg-blue-500 h-[80vh]"></div>
        <div className="w-1/3 bg-yellow-500 h-[80vh]"></div>
      </div>
    </div>
  );
};

export default LatestWorks;
