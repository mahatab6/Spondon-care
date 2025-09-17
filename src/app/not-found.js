"use client";
import { Home, ArrowLeft, Search, HeartPulse } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f0f8ff] to-[#e0f7ff]">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#0E6BA8] font-bold text-xl"
          >
            <HeartPulse className="w-8 h-8 mr-2" />
            Spondon Care
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated 404 number */}
          <div className="relative mb-8">
            <div className="text-[180px] md:text-[240px] font-bold text-[#0E6BA8] opacity-20 leading-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl md:text-9xl font-bold text-[#0E6BA8]">
                404
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our website..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#0E6BA8] focus:border-transparent"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-4 bg-white text-[#0E6BA8] border border-[#0E6BA8] rounded-2xl font-semibold hover:bg-[#0E6BA8] hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Quick links */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/services"
                className="text-[#0E6BA8] hover:text-[#00A8E8] transition-colors duration-300"
              >
                Our Services
              </Link>
              <Link
                href="/doctors"
                className="text-[#0E6BA8] hover:text-[#00A8E8] transition-colors duration-300"
              >
                Find a Doctor
              </Link>
              <Link
                href="/About"
                className="text-[#0E6BA8] hover:text-[#00A8E8] transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/Contact"
                className="text-[#0E6BA8] hover:text-[#00A8E8] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
