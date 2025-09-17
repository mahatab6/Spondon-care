"use client";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-tr from-[#f0f8ff] to-[#e0f7ff]">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#0E6BA8]/5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00A8E8]/5 rounded-full"></div>

      <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions or need assistance? Fill out the form below and our
            team will get back to you shortly.
          </p>
        </div>

        <form className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E6BA8] focus:border-transparent transition-colors duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E6BA8] focus:border-transparent transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E6BA8] focus:border-transparent transition-colors duration-300"
              placeholder="+880 1712 345 678"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject *
            </label>
            <select
              id="subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E6BA8] focus:border-transparent transition-colors duration-300"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="appointment">Appointment Request</option>
              <option value="billing">Billing Question</option>
              <option value="technical">Technical Support</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E6BA8] focus:border-transparent transition-colors duration-300"
              placeholder="Please describe your inquiry in detail..."
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="group w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
