"use client"
import React from 'react';

const Slide4 = () => {
    return (
        <div className="w-full h-[450px] relative">
      <div className="absolute w-full h-full z-20 flex items-center justify-center ">
        <div className="w-11/12 mx-auto text-center space-y-2 md:space-y-5 lg:space-y-7 text-gray-200">
          <h1 className="font-playfair font-bold text-3xl md:text-5xl">
            Comprehensive Health Packages for Every Need
          </h1>
          <p className="lg:w-9/12 mx-auto font-semibold">
            From basic wellness check-ups to specialized executive health assessments, we offer a wide spectrum of medical tests designed for prevention, early detection, and comprehensive health management for you and your family.
          </p>
          <button className="px-8 py-2 font-medium text-xl bg-gradient-to-r from-cyan-300 to-violet-200 rounded-sm text-center text-black cursor-pointer">
            Discover More
          </button>
        </div>
      </div>
      <div className="absolute z-10 h-full w-full ">
        <img
          className="h-full w-full lg:object-cover object-center"
          src="/images/slide4.jpg"
          alt=""
        />
      </div>
    </div>
    );
};

export default Slide4;