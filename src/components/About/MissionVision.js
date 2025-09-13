"use client";
import { Target, Eye, Heart, ChevronRight } from "lucide-react";

export function MissionVision() {
  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0E6BA8]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A8E8]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Mission Card */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0E6BA8]/10 text-[#0E6BA8]">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900 group-hover:text-[#0E6BA8] transition-colors duration-300">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-grow">
            To revolutionize healthcare delivery through innovative digital
            solutions that create seamless experiences. We combine cutting-edge
            technology with compassionate care to optimize hospital operations
            and dramatically improve patient outcomes across the entire
            healthcare ecosystem.
          </p>
          <div className="flex items-center text-[#0E6BA8] font-medium mt-auto">
            <span>Discover our approach</span>
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Vision Card */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00A8E8]/10 text-[#00A8E8]">
            <Eye className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900 group-hover:text-[#00A8E8] transition-colors duration-300">
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-grow">
            To establish the nation's most trusted digital healthcare ecosystem,
            empowering medical institutions to deliver exceptional, personalized
            care with unprecedented accuracy, efficiency, and transparency. We
            envision a future where technology eliminates healthcare barriers
            for all communities.
          </p>
          <div className="flex items-center text-[#00A8E8] font-medium mt-auto">
            <span>See our future plans</span>
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Values Card */}
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:col-span-2 lg:col-span-1">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0E6BA8]/10 text-[#0E6BA8]">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900 group-hover:text-[#0E6BA8] transition-colors duration-300">
            Our Core Values
          </h2>
          <ul className="space-y-4 mb-6 flex-grow">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#0E6BA8] mt-2.5 mr-3 flex-shrink-0"></div>
              <span className="text-lg text-muted-foreground">
                Patient-first approach in all decisions and operations
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#0E6BA8] mt-2.5 mr-3 flex-shrink-0"></div>
              <span className="text-lg text-muted-foreground">
                Uncompromising integrity, transparency, and accountability
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#0E6BA8] mt-2.5 mr-3 flex-shrink-0"></div>
              <span className="text-lg text-muted-foreground">
                Continuous innovation through emerging technologies
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#0E6BA8] mt-2.5 mr-3 flex-shrink-0"></div>
              <span className="text-lg text-muted-foreground">
                Empowering healthcare professionals with intelligent tools
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#0E6BA8] mt-2.5 mr-3 flex-shrink-0"></div>
              <span className="text-lg text-muted-foreground">
                Deep commitment to community health and safety
              </span>
            </li>
          </ul>
          <div className="flex items-center text-[#0E6BA8] font-medium mt-auto">
            <span>Learn about our values</span>
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
