import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { clients } from "../clientsdatabase";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div id="clients" className="bg-[#333333] py-8 ">
        <div className="flex flex-col text-5xl items-end p-4   uppercase   gap-2 text-white">
          <h1 className="font-bold">Clients</h1>
        </div>
        <div className="w-[80%]  mx-auto ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            className="mb-2 py-8"
            thumbs={{ swiper: thumbsSwiper }}
            pagination={true}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
          >
            {clients.map((client) => (
              <SwiperSlide>
                <div className="flex justify-around  ">
                  <img
                    src={client.img}
                    alt="pic1"
                    className="h-[60vh] object-cover object-top  w-[48%]"
                  />
                  <div className="bg-white w-[48%] h-[50vh] flex flex-col  my-auto p-8">
                    <h1 className="text-4xl font-bold ">{client.name}</h1>
                    <p className="text-[#333333]">{client.title}</p>
                    <p className="bg-[#333333] h-[2px] w-12"></p>
                    <p className="my-4">{client.description}</p>
                    <p className="bg-[#333333] h-[2px] my-2 w-36"></p>
                    <p className="flex uppercase gap-2 bg-black p-2 w-[40%] text-white flex justify-center   cursor-pointer hover:scale-105 duration-500 transition-all">
                      Explore Photo set
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {clients.map((client) => (
              <SwiperSlide className="h-[300px] w-[25%]  ">
                <img
                  src={client.img}
                  className="  object-cover object-center opacity-60 hover:opacity-100 cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
