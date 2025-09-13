"use client";

import React from "react";

const services = [
  {
    id: 1,
    image: "https://i.ibb.co.com/pjVKQ1z2/blood-test-tube-alt.png",
    color: "#FF6B6B",
    title: "Test Booking",
    description:
      "Book medical tests online, choose your preferred lab, and receive digital reports securely.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/RG2FdNDX/stethoscope.png",
    color: "#4D96FF",
    title: "Health Records",
    description:
      "Securely store and access your medical history, appointments, prescriptions, and lab reports anytime.",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/zWcsTVF9/wellbeing.png",
    color: "#FFD93D",
    title: "Wellness Programs",
    description:
      "Access personalized wellness programs including nutrition, fitness, and preventive care plans.",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/PGjYvKzh/medication.png",
    color: "#9D4EDD",
    title: "Pharmacy Delivery",
    description:
      "Order medicines online and get them delivered to your doorstep quickly and securely.",
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/k6ccjKSf/pulse.png",
    color: "#6BCB77",
    title: "Health Monitoring",
    description:
      "Monitor vitals like blood pressure, glucose, and heart rate; receive alerts for abnormal readings.",
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/ycCmsFsF/salad.png",
    color: "#FF922B",
    title: "Nutrition & Diet Consultation",
    description:
      "Get personalized diet plans and nutrition guidance from certified experts.",
  },
  {
    id: 7,
    image: "https://i.ibb.co.com/k2PMkfKz/shield-cat.png",
    color: "#1ABC9C",
    title: "Mental Health Support",
    description:
      "Access online counseling, therapy sessions, and stress management programs.",
  },
  {
    id: 8,
    image: "https://i.ibb.co.com/whNpBk1b/treatment.png",
    color: "#E67E22",
    title: "Insurance Assistance",
    description:
      "Manage your health insurance claims, coverage, and approvals directly through the platform.",
  },
  {
    id: 9,
    image: "https://i.ibb.co.com/2Y37tpcj/nursing-home.png",
    color: "#2ECC71",
    title: "Home Care Services",
    description:
      "Professional nurses and caregivers available for home visits. Post-surgery care, elderly support, and regular checkups at your doorstep.",
  },
  {
    id: 10,
    image: "https://i.ibb.co.com/NdpNwzD0/inoculate.png",
    color: "#E84393",
    title: "Vaccination Scheduling",
    description:
      "Book vaccinations for children, adults, and travelers. Get reminders and digital certificates.",
  },
  {
    id: 11,
    image: "https://i.ibb.co.com/pvhRxXZ7/pregnant.png",
    color: "#16A085",
    title: "Maternity & Child Care",
    description:
      "Comprehensive maternity packages, pediatric consultations, and growth monitoring for newborns.",
  },
  {
    id: 12,
    image: "https://i.ibb.co.com/kVBPjW95/physiotherapy.png",
    color: "#F39C12",
    title: "Rehabilitation & Physiotherapy",
    description:
      "Access physiotherapy sessions, rehabilitation exercises, and recovery programs tailored to patient needs.",
  },
  {
    id: 13,
    image: "https://i.ibb.co.com/dw8nT1tH/refugee.png",
    color: "#2980B9",
    title: "Health Camps & Community Programs",
    description:
      "Join free or discounted health check-up camps, awareness programs, and hospital-organized events.",
  },
  {
    id: 14,
    image: "https://i.ibb.co.com/pjVKQ1z2/blood-test-tube-alt.png",
    color: "#C0392B",
    title: "Blood Bank & Donor Management",
    description:
      "Real-time access to blood availability, request urgent blood units, and register as a donor.",
  },
  {
    id: 15,
    image: "https://i.ibb.co.com/1GLk9Vw3/doctor-consultation.png",
    color: "#8E44AD",
    title: "Second Opinion Services",
    description:
      "Upload medical reports and get expert second opinions from specialists around the world.",
  },
  {
    id: 16,
    image: "https://i.ibb.co.com/1ttVDyTq/diabetes-test.png",
    color: "#27AE60",
    title: "Chronic Disease Management",
    description:
      "Dedicated care plans for diabetes, hypertension, heart disease, and long-term conditions.",
  },
  {
    id: 17,
    image: "https://i.ibb.co.com/whNpBk1b/treatment.png",
    color: "#D35400",
    title: "Surgery Packages & Cost Estimation",
    description:
      "Transparent package details, estimated costs, and installment options for surgeries.",
  },
  {
    id: 18,
    image: "https://i.ibb.co.com/bjXqPC1L/smartwatch.png",
    color: "#3498DB",
    title: "Remote Patient Monitoring",
    description:
      "Smart devices track patient vitals remotely, data shared directly with doctors for continuous care.",
  },
  {
    id: 19,
    image: "https://i.ibb.co.com/b97Gdj0/light-emergency-on.png",
    color: "#FF4757",
    title: "Emergency Support",
    description:
      "Immediate medical assistance for emergencies with real-time alerts to the hospital staff.",
  },
  {
    id: 20,
    image: "https://i.ibb.co.com/bj5MnYff/video-camera-alt.png",
    color: "#2F3542",
    title: "Online Video Consultation",
    description:
      "Connect with doctors via secure video calls anytime. Ideal for follow-ups or remote consultation.",
  },
];
export default function ServicesPage() {
  return (
    <div className=" py-12 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Hospital Services
        </h2>
        <p className="text-gray-600 mt-2">
          A complete suite of healthcare solutions designed for your convenience
          and well-being.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            style={{ borderTop: `6px solid ${service.color}` }}
          >
            {/* Icon */}
            <div className="flex justify-center mt-6">
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <img src={service.image} alt={service.title} className="w-10" />
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Learn More Button */}
              <button
                className="px-5 hover:cursor-pointer py-2 rounded-full text-white font-medium transition-transform duration-300 transform hover:scale-105"
                style={{ backgroundColor: service.color }}
              >
                Learn More
              </button>
            </div>

            {/* Hover Overlay for Shadow & Border */}
            <style jsx>{`
              .group:hover {
                box-shadow: 0 6px 20px ${service.color}55;
                border-top: 6px solid ${service.color};
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
}
