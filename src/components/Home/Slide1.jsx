"use client";
import React from "react";



const Slide1 = () => {
  return (
    <div className="w-full h-[450px] relative">
      <div className="absolute w-full h-full z-20 flex items-center justify-center ">
        <div className="w-11/12 mx-auto text-center space-y-2 md:space-y-5 lg:space-y-7 text-gray-50">
          <h1 className="font-playfair font-bold text-3xl md:text-5xl">
            Your Complete Health Management Ecosystem
          </h1>
          <p className="lg:w-9/12 mx-auto font-semibold">
            Spondon Care is more than appointments; it's your integrated partner
            in health. We streamline everything from doctor consultations and
            lab tests to medical records, all within one secure, user-friendly
            platform dedicated to your well-being.
          </p>
          <button className="px-8 py-2 font-medium text-xl bg-gradient-to-r from-green-200 to-violet-200 rounded-sm text-center text-black cursor-pointer">Explore More</button>
        </div>
      </div>
      <div className="absolute z-10 h-full w-full ">
        <img
          className="h-full w-full object-cover object-center"
          src="/images/slide1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide1;
