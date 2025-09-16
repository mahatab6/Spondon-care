import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  FaMicroscope,
  FaStethoscope,
  FaUserCheck,
  FaVial,
  FaVirusCovid,
  FaXRay,
} from "react-icons/fa6";
import { FaAllergies, FaHeartbeat } from "react-icons/fa";
import { Irish_Grover } from "next/font/google";

const testReports = [
  {
    id: 1,
    h1: "Certified & Accredited Labs (ISO/NABL)",
    image: "https://i.ibb.co/DfB3vsK4/badge.png",
  },
  {
    id: 2,
    h1: "100% Accurate Reports",
    image: "https://i.ibb.co/kgFZCxpH/100.png",
  },
  {
    id: 3,
    h1: "Home Sample Collection",
    image: "https://i.ibb.co/ZRKZsVSR/fast-delivery.png",
  },
  {
    id: 4,
    h1: "Same-Day Report Delivery",
    image: "https://i.ibb.co/BVYMTTDd/clock.png",
  },
  {
    id: 5,
    h1: "Affordable Test Packages",
    image: "https://i.ibb.co/V0GwZ6qZ/incoming.png",
  },
];

const categories = [
  { id: 1, name: "Blood Tests", icon: <FaVial /> },
  { id: 2, name: "Urine & Stool Tests", icon: <FaMicroscope /> },
  { id: 3, name: "X-ray, MRI, Ultrasound", icon: <FaXRay /> },
  { id: 4, name: "ECG & Cardiac Tests", icon: <FaHeartbeat /> },
  { id: 5, name: "COVID, Flu & Infection", icon: <FaVirusCovid /> },
  { id: 6, name: "Allergy Tests", icon: <FaAllergies /> },
  { id: 7, name: "Pre-Employment Screening", icon: <FaUserCheck /> },
  { id: 8, name: "Full Body Check-ups", icon: <FaStethoscope /> },
];

const Package = [
  {
    id: 1,
    title: "Starter Health Checkup",
    shortDescription:
      "Basic health screening package including blood pressure, glucose, and BMI check.",
    currentPrice: 69.99,
    offerPrice: 49.99,
  },
  {
    id: 2,
    title: "Wellness Plus Package",
    shortDescription:
      "Comprehensive health package with full body checkup, diet consultation, and fitness tips.",
    currentPrice: 129.99,
    offerPrice: 99.99,
  },
  {
    id: 3,
    title: "Family Care Bundle",
    shortDescription:
      "Affordable package covering health checkups for up to 4 family members.",
    currentPrice: 249.99,
    offerPrice: 199.99,
  },
  {
    id: 4,
    title: "Premium Executive Plan",
    shortDescription:
      "Exclusive package with advanced diagnostics, specialist consultation, and annual health reports.",
    currentPrice: 399.99,
    offerPrice: 299.99,
  },
];

export default function TestPage() {
  return (
    <div>
      <div className=" py-28 lg:py-40 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 text-white overflow-hidden ">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Reliable Lab Tests & Diagnostics,{" "}
          <span className="text-yellow-300">Anytime, Anywhere</span>
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
          Book your medical tests online and get accurate reports from trusted
          labs.
        </p>
        <Button variant={"default"} className={"font-bold"}>
          Book a Test Now
        </Button>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center text-center py-10">
        {testReports.map((post) => (
          <div
            key={post.id}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <Image
              src={post.image}
              alt={post.h1}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
              {post.h1}
            </h2>
          </div>
        ))}
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Available Test Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl mb-4">
                {cat.icon}
              </div>
              <p className="text-lg font-semibold text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 lg:px-16 py-10">
        <h2 className="text-3xl lg:text-5xl font-bold gradient-text mb-10 text-center">
          Special Packages & Offers
        </h2>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Package.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.shortDescription}</p>

              <div className="flex items-baseline mb-6">
                <p className="text-3xl font-bold text-purple-600">
                  ${item.offerPrice}
                </p>
                <p className="text-gray-500 line-through ml-3">
                  ${item.currentPrice}
                </p>
              </div>

              <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors h-11 px-6 w-full bg-purple-600 hover:bg-purple-700 text-white mt-auto shadow-md hover:shadow-lg">
                Book Package
              </button>
            </div>
          ))}
        </div>

        {/* Extra Offers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-yellow-100 text-yellow-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-lg">
              Flat 20% off on First Test Booking
            </p>
          </div>
          <div className="bg-green-100 text-green-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-lg">
              Free Home Sample Collection for Orders Above $50
            </p>
          </div>
          <div className="bg-pink-100 text-pink-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-lg">
              Special Women’s Health Checkup at Discounted Price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
