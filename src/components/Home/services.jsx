import Image from "next/image";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

export default function Services() {
  const servicesData = [
    {
      image: "https://i.ibb.co.com/n80srgVd/appointment.png",
      h1: "Doctor Appointments",
      p: "Search, book, and consult with top-rated doctors online or in-person.",
    },
    {
      image: "https://i.ibb.co.com/FL58fyHc/online-meeting.png",
      h1: "Online Video Consultation",
      p: "Connect with doctors via secure video calls anytime, anywhere.",
    },
    {
      image: "https://i.ibb.co.com/G4FNqtYP/emergency-call.png",
      h1: "Emergency Support",
      p: "Immediate assistance for medical emergencies with real-time alerts.",
    },
    {
      image: "https://i.ibb.co.com/S7Wcd5rX/blood-test.png",
      h1: "Test Booking",
      p: "Book lab tests online and receive digital reports instantly.",
    },
    {
      image: "https://i.ibb.co.com/ksCZr2rw/health.png",
      h1: "Health Records",
      p: "Secure storage for prescriptions, appointments, and medical history.",
    },
    {
      image: "https://i.ibb.co.com/N2MM1HzJ/health-check.png",
      h1: "Health Monitoring",
      p: "Track your health metrics and get personalized recommendations.",
    },
    {
      image: "https://i.ibb.co.com/GvZ4svdr/medicines.png",
      h1: "Pharmacy Delivery",
      p: "Order medicines online and get them delivered quickly to your doorstep.",
    },
    {
      image: "https://i.ibb.co.com/mVLbSyCM/wellness-program.png",
      h1: "Wellness Programs",
      p: "Access personalized fitness, diet, and wellness plans for a healthier lifestyle.",
    },
  ];

  return (
    <div className="my-16">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold">Our Key Services</h2>
        <p className="text-xl ">
          Comprehensive healthcare solutions designed to make your medical
          journey <br />
          seamless and accessible
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col  hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.image}
              alt={item.h1}
              width={100}
              height={100}
              className="object-cover rounded-xl mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">{item.h1}</h1>
            <p className="text-gray-600">{item.p}</p>
            <p className="flex items-center gap-2 font-bold hover:cursor-pointer text-blue-500">
              Learn More <SlArrowRight />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
