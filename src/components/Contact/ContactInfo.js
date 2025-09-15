"use client";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

export function ContactInfo() {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+880 1712 345 678",
      description: "Sat to Thu 9am to 6pm",
      action: "Call Now",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "info@spondoncare.com",
      description: "Send us your queries anytime",
      action: "Send Email",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: "House 12, Road 7, Banani",
      description: "Dhaka, Bangladesh 1213",
      action: "Get Directions",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Opening Hours",
      details: "Saturday - Thursday: 9am - 6pm",
      description: "Friday: Closed",
      action: "View Full Schedule",
    },
  ];

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0E6BA8]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A8E8]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0E6BA8]/10 text-[#0E6BA8] mb-6 group-hover:bg-[#0E6BA8] group-hover:text-white transition-colors duration-300">
              {method.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {method.title}
            </h3>
            <p className="text-lg font-medium text-[#0E6BA8] mb-2">
              {method.details}
            </p>
            <p className="text-muted-foreground mb-4">{method.description}</p>
            <div className="flex items-center justify-center text-[#0E6BA8] font-medium group-hover:text-[#00A8E8] transition-colors duration-300">
              <span>{method.action}</span>
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
