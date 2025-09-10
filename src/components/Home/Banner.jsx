"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

const Banner = () => {
  return (
    <div>
      <Swiper
        className="h-[450px]"
        modules={[Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={true}
        loop
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          <Slide1></Slide1>
        </SwiperSlide>
        <SwiperSlide className=" bg-amber-500">
          <Slide2></Slide2>
        </SwiperSlide>
        <SwiperSlide className=" bg-cyan-500">
          <Slide3></Slide3>
        </SwiperSlide>
        <SwiperSlide className=" bg-violet-500">
          <Slide4></Slide4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
