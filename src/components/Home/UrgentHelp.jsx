"use client";
import React from "react";
import { IoCall, IoCallOutline } from "react-icons/io5";
import { LuAmbulance } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { SlArrowLeft } from "react-icons/sl";
import { motion } from "framer-motion";

export default function UrgentHelp() {
  const cardVariants = {
    hover: { scale: 1.05, y: -5 },
  };

  const statVariants = {
    hover: { scale: 1.1, color: "#FFD700" },
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 justify-items-center py-20 relative overflow-hidden ">
      {/* Optional animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 opacity-20 animate-gradient-slow pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-5 max-w-7xl mx-auto">
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Need Urgent Medical Help?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Request emergency support immediately. Our team is ready 24/7 to assist <br />
            you with any medical emergency.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
            className="inline-flex items-center justify-center h-14 bg-white text-red-600 hover:bg-red-50 text-xl px-12 rounded-full font-bold shadow-2xl mb-6 transition-all duration-300"
          >
            <IoCall className="mr-2 text-2xl" /> Request Emergency Assistance
          </motion.button>
          <p className="text-lg font-medium mb-2 text-white">Emergency Hotline:</p>
          <h4 className="text-2xl font-bold text-white">+1 (555) 911-HELP</h4>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-5">
          {[
            { icon: IoCallOutline, title: "Instant Connection", desc: "Direct line to emergency medical professionals" },
            { icon: MdAccessTime, title: "24/7 Availability", desc: "Round-the-clock emergency support" },
            { icon: FaLocationDot, title: "Location Tracking", desc: "GPS-enabled for fastest response time" },
            { icon: LuAmbulance, title: "Ambulance Dispatch", desc: "Immediate ambulance service coordination" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/20 space-y-3 cursor-pointer"
                whileHover="hover"
                variants={cardVariants}
              >
                <Icon size={30} className="text-yellow-300" />
                <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                <p>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white max-w-7xl mx-auto">
        {[
          { value: "5min", label: "Average Response Time", icon: <SlArrowLeft /> },
          { value: "24/7", label: "Emergency Support" },
          { value: "100+", label: "Emergency Specialists" },
          { value: "99.9%", label: "Success Rate" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="cursor-pointer"
            whileHover="hover"
            variants={statVariants}
          >
            <h2 className="flex items-center justify-center text-4xl font-bold mb-2 gap-2">
              {item.icon} {item.value}
            </h2>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Add animation classes in tailwind.config for gradient-slow */}
      <style jsx>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
