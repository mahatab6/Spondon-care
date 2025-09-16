"use client";
import { ChevronDown, HeadphonesIcon, Phone } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our support line directly.",
    },
    {
      question: "Do you offer emergency medical consultations?",
      answer:
        "Yes, we provide emergency consultation services. Please call our emergency hotline at +1 (555) 911-SPONDON for immediate assistance.",
    },
    {
      question: "Can I schedule an appointment through the website?",
      answer:
        "Absolutely! You can schedule appointments through our patient portal. If you need assistance, our scheduling team is available during business hours.",
    },
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance providers. Please visit our Insurance Information page for a complete list of accepted plans.",
    },
    {
      question: "How can I access my medical records online?",
      answer:
        "Registered patients can access their medical records through our secure patient portal. If you need help setting up an account, contact our support team.",
    },
  ];

  return (
    <section className="relative py-20 px-6 max-w-4xl mx-auto">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0E6BA8]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A8E8]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="relative text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground">
          Find quick answers to common questions about our services and support.
        </p>
      </div>

      <div className="relative space-y-4 mb-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 pt-0 text-muted-foreground">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative text-center">
        <div className="inline-flex flex-col md:flex-row items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center mb-4 md:mb-0 md:mr-6">
            <div className="bg-[#0E6BA8] text-white p-3 rounded-full mr-4">
              <HeadphonesIcon className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Still have questions?
              </h3>
              <p className="text-muted-foreground">
                Our support team is here to help you
              </p>
            </div>
          </div>
          <button className="flex items-center px-6 py-3 bg-[#0E6BA8] text-white rounded-xl font-medium hover:bg-[#00A8E8] transition-colors duration-300">
            <Phone className="w-5 h-5 mr-2" />
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
