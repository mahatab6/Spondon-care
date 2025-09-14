"use client";
import Image from "next/image";
import { Linkedin, Mail, Award } from "lucide-react";

export function TeamSection() {
  const doctors = [
    {
      name: "Dr. Ahsan Rahman",
      role: "Cardiologist",
      experience: "15+ years",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Dr. Nafisa Karim",
      role: "Neurologist",
      experience: "12+ years",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Dr. Imran Hossain",
      role: "Orthopedic Surgeon",
      experience: "18+ years",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80",
    },
    {
      name: "Dr. Meherun Nahar",
      role: "Pediatrician",
      experience: "10+ years",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Dr. Tanvir Alam",
      role: "General Surgeon",
      experience: "14+ years",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Dr. Farhana Akter",
      role: "Gynecologist",
      experience: "16+ years",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0E6BA8]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A8E8]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="relative text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
          Meet Our Specialist Team
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our team of board-certified physicians brings decades of experience
          and a commitment to excellence in patient care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="relative mb-6">
              <div className="relative h-80 w-full overflow-hidden rounded-xl">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={i < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Social links */}
              <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#0E6BA8] hover:text-white transition-colors duration-300">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#0E6BA8] hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-xl mb-1 text-gray-900">
                {doc.name}
              </h3>
              <p className="text-[#0E6BA8] font-medium mb-2">{doc.role}</p>

              <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                <Award className="w-4 h-4 mr-1 text-amber-500" />
                <span>{doc.experience} experience</span>
              </div>

              <button className="inline-flex items-center px-6 py-2 bg-transparent border border-[#0E6BA8] text-[#0E6BA8] rounded-full font-medium hover:bg-[#0E6BA8] hover:text-white transition-all duration-300 group-hover:shadow-lg">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300">
          Meet Our Entire Team
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
