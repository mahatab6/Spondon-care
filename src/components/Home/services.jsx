import Image from "next/image";
import React from "react";

export default function Services() {
  const servicesData = [
    {
      image: "https://i.ibb.co.com/PZQ5gH45/Doctor-Appointments.jpg",
      h1: "Doctor Appointments",
      p: "Search, book, and consult with top-rated doctors online or in-person.",
    },
    {
      image: "https://i.ibb.co.com/0RtgRkSr/Online-Video-Consultation.jpg",
      h1: "Online Video Consultation",
      p: "Connect with doctors via secure video calls anytime, anywhere.",
    },
    {
      image: "https://i.ibb.co.com/MydwfNzY/Emergency-Support.png",
      h1: "Emergency Support",
      p: "Immediate assistance for medical emergencies with real-time alerts.",
    },
    {
      image: "https://i.ibb.co.com/RTPLTWgd/Test-Booking.jpg",
      h1: "Test Booking",
      p: "Book lab tests online and receive digital reports instantly.",
    },
    {
      image: "https://i.ibb.co.com/xqc36c7q/Health-Records.jpg",
      h1: "Health Records",
      p: "Secure storage for prescriptions, appointments, and medical history.",
    },
    {
      image: "https://i.ibb.co.com/JWbVhpdm/Health-Monitoring.jpg",
      h1: "Health Monitoring",
      p: "Track your health metrics and get personalized recommendations.",
    },
  ];

  return (
    <div>
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold">Our Key Services</h2>
        <p className="text-xl ">
          Comprehensive healthcare solutions designed to make your medical
          journey <br />
          seamless and accessible
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.image}
              alt={item.h1}
              width={300}
              height={50}
              className="object-cover rounded-xl mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">{item.h1}</h1>
            <p className="text-gray-600">{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
