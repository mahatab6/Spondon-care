"use client";
import {
  Users,
  Stethoscope,
  Building,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

export function StatsCard() {
  const stats = [
    {
      value: "150+",
      label: "Expert Doctors",
      icon: <Stethoscope className="w-8 h-8" />,
      description: "Board-certified specialists",
    },
    {
      value: "25K+",
      label: "Patients Served",
      icon: <Users className="w-8 h-8" />,
      description: "Satisfied patients annually",
    },
    {
      value: "30+",
      label: "Departments",
      icon: <Building className="w-8 h-8" />,
      description: "Specialized medical fields",
    },
    {
      value: "20+",
      label: "Years of Excellence",
      icon: <Calendar className="w-8 h-8" />,
      description: "Trusted healthcare provider",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-tr from-[#f0f8ff] to-[#e0f7ff] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#0E6BA8]/5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00A8E8]/5 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Excellence in Numbers
          </h2>
          <p className="text-xl text-muted-foreground">
            For over two decades, Spondon Care has been delivering exceptional
            healthcare services with measurable results and patient
            satisfaction.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0E6BA8]/20 relative overflow-hidden"
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0E6BA8]/5 to-[#00A8E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0E6BA8]/10 text-[#0E6BA8] mb-6 group-hover:bg-[#0E6BA8] group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>

                {/* Value */}
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-muted-foreground">{stat.description}</p>

                {/* Hover indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#0E6BA8] flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:from-[#0E6BA8]/90 hover:to-[#00A8E8]/90">
            Discover Our Success Stories
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
