"use client";
import React from "react";
import Navbar from "../navbar";

const Slide2 = () => {
  return (
    <div className="w-full min-h-[90vh] relative">
      <div className="absolute w-full h-full z-20 flex flex-col">
        <div></div>
        <div className="w-11/12 mx-auto text-center h-full flex flex-col justify-center items-center gap-5 text-gray-100">
          <h1 className="font-playfair font-bold text-3xl md:text-5xl">
            Precision Diagnostics with Cutting-Edge Technology
          </h1>
          <p className="font-semibold">
            Experience the future of healthcare with our advanced medical testing. We utilize international state-of-the-art technology to ensure unparalleled accuracy in diagnostics, providing you with reliable and swift results for informed treatment decisions.
          </p>
          <button className="px-8 py-2 font-medium text-xl bg-gradient-to-r from-green-200 to-violet-200 rounded-sm text-center text-black cursor-pointer">
            Discover More
          </button>
        </div>
      </div>
      <div className="absolute z-10 h-full w-full ">
        <img
          className="h-full w-full lg:object-cover object-center"
          src="/images/slide2b.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide2;
