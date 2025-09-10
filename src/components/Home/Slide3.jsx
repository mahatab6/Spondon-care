"use client"
import React from 'react';

const Slide3 = () => {
    return (
        <div className="w-full h-[450px] relative">
      <div className="absolute w-full h-full z-20 flex items-center justify-center ">
        <div className="w-11/12 mx-auto text-center space-y-2 md:space-y-5 lg:space-y-7 text-gray-900">
          <h1 className="font-playfair font-bold text-3xl md:text-5xl">
            Effortless Doctor Appointments
          </h1>
          <p className="lg:w-9/12 mx-auto font-semibold">
            Book consultations with renowned specialists in just a few clicks. Our intuitive online system allows you to schedule, reschedule, or manage your appointments anytime, anywhere, eliminating long waits and phone calls.
          </p>
          <button className="px-8 py-2 font-medium text-xl bg-gradient-to-r from-green-200 to-violet-200 rounded-sm text-center text-black cursor-pointer">
            Discover More
          </button>
        </div>
      </div>
      <div className="absolute z-10 h-full w-full ">
        <img
          className="h-full w-full lg:object-cover object-center"
          src="/images/slide3.jpg"
          alt=""
        />
      </div>
    </div>
    );
};

export default Slide3;