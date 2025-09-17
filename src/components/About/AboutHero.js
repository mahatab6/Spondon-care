"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, HeartPulse } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10% left-5% w-72 h-72 rounded-full bg-white"></div>
        <div className="absolute bottom-10% right-5% w-96 h-96 rounded-full bg-white"></div>
      </div>

      {/* Medical icon pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 gap-8 rotate-12 transform -translate-y-20">
          {[...Array(30)].map((_, i) => (
            <HeartPulse key={i} className="w-10 h-10" />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <HeartPulse className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">
              Innovating Healthcare Since 2023
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
            Transforming Healthcare Through{" "}
            <span className="text-accent">Digital Innovation</span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-95 mb-10 leading-relaxed">
            Spondon Care is redefining hospital management with our cutting-edge
            platform that seamlessly connects patients, healthcare providers,
            and medical facilities. We're committed to making healthcare more
            accessible, efficient, and patient-centered.
          </p>

          {/* Stats section */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-sm opacity-80">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">25k+</div>
              <div className="text-sm opacity-80">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="px-8 py-3 text-lg bg-white text-[#0E6BA8] hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Platform
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-2 border-white bg-transparent hover:bg-white/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Wave separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
