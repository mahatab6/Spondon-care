"use client";
import { MessageCircle, HeartPulse } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] text-white py-32 px-6 text-center overflow-hidden">
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

      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">We're Here to Help</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
          Get in <span className="text-accent">Touch</span> With Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
          We're here to answer your questions and provide the support you need.
          Reach out to us through any of these channels.
        </p>
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
