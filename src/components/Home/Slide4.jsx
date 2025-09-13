"use client"
import React from 'react';
import Navbar from '../navbar';

const Slide4 = () => {
    return (
        <div className="w-full min-h-[90vh] relative">
      <div className="absolute w-full h-full z-20 flex flex-col">
        <div></div>
        <div className="w-11/12 mx-auto text-center flex flex-col justify-center items-center gap-5 h-full
         text-gray-200">
          <h1 className="font-playfair font-bold text-3xl md:text-5xl">
            Comprehensive Health Packages for Every Need
          </h1>
          <p className="font-semibold">
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
          src="/images/slide4br.jpg"
          alt=""
        />
      </div>
    </div>
    );
};

export default Slide4;