"use client";
import React from "react";
import { HeartPulse, Play } from "lucide-react";

export default function ChronicDiseaseManagementPage() {
  // Inline data
  const data = {
    title: "Chronic Disease Management",
    subtitle:
      "Dedicated care plans for diabetes, hypertension, heart disease, and other long-term conditions. At Spondon Care, we believe managing chronic illness is not just about treatment — it's about empowering patients with tools, guidance, and consistent support to lead healthier lives. Through a combination of modern diagnostics, personalized care plans, and continuous monitoring, we aim to make healthcare proactive rather than reactive.",
    tests: [
      {
        id: "t1",
        name: "Diabetes Checkup Package",
        desc: "Glucose profile, HbA1c, lipid profile, and nutritional counselling.",
        price: "৳ 1,800",
      },
      {
        id: "t2",
        name: "Cardiac Health Package",
        desc: "ECG, Echo, lipid panel, and cardiology consult.",
        price: "৳ 3,200",
      },
      {
        id: "t3",
        name: "Hypertension Panel",
        desc: "Renal function, electrolytes, ambulatory BP monitoring, and consult.",
        price: "৳ 2,200",
      },
      {
        id: "t4",
        name: "Comprehensive Chronic Care",
        desc: "Complete metabolic panel, specialist review & follow-up plan.",
        price: "৳ 4,500",
      },
      {
        id: "t5",
        name: "Kidney Function Package",
        desc: "Creatinine, urea, electrolytes, and nephrology consult.",
        price: "৳ 2,000",
      },
      {
        id: "t6",
        name: "Liver Health Panel",
        desc: "LFT, ultrasound, and hepatology consult.",
        price: "৳ 2,400",
      },
      {
        id: "t7",
        name: "Thyroid & Metabolic Package",
        desc: "TSH, T3, T4 with endocrinology guidance.",
        price: "৳ 2,100",
      },
      {
        id: "t8",
        name: "Respiratory Checkup",
        desc: "Pulmonary function test, X-ray, and pulmonology consult.",
        price: "৳ 2,600",
      },
    ],
    doctors: [
      {
        id: 1,
        name: "Dr. Ayesha Rahman",
        spec: "Endocrinologist",
        exp: "12 years",
        hospital: "Dhaka Medical",
        disease: "Diabetes",
      },
      {
        id: 2,
        name: "Dr. Farhan Karim",
        spec: "Endocrinologist",
        exp: "9 years",
        hospital: "Square Hospital",
        disease: "Diabetes",
      },
      {
        id: 3,
        name: "Dr. Kamal Hossain",
        spec: "Cardiologist",
        exp: "15 years",
        hospital: "Apollo Hospitals",
        disease: "Heart",
      },
      {
        id: 4,
        name: "Dr. Laila Sultana",
        spec: "Cardiologist",
        exp: "11 years",
        hospital: "United Hospital",
        disease: "Heart",
      },
      {
        id: 5,
        name: "Dr. Nabila Chowdhury",
        spec: "Nephrologist",
        exp: "10 years",
        hospital: "Ibn Sina",
        disease: "Hypertension",
      },
      {
        id: 6,
        name: "Dr. Rafiq Islam",
        spec: "Internal Medicine",
        exp: "8 years",
        hospital: "Popular Hospital",
        disease: "Hypertension",
      },
      {
        id: 7,
        name: "Dr. Mehnaz Parvin",
        spec: "General Physician",
        exp: "13 years",
        hospital: "Green Life Hospital",
        disease: "Long-Term Care",
      },
      {
        id: 8,
        name: "Dr. Tahmid Alam",
        spec: "Nutritionist",
        exp: "7 years",
        hospital: "Labaid Hospital",
        disease: "Long-Term Care",
      },
    ],
    blogs: [
      {
        id: "b1",
        title: "New Approaches to Diabetes Management",
        excerpt:
          "Emerging therapies and lifestyle strategies that help lower HbA1c safely.",
        date: "Sep 5, 2025",
      },
      {
        id: "b2",
        title: "Heart-Healthy Diet Plans",
        excerpt:
          "Balanced meal plans focused on reducing cholesterol & blood pressure.",
        date: "Aug 28, 2025",
      },
      {
        id: "b3",
        title: "Monitoring Tests You Should Know",
        excerpt:
          "A practical guide to tests and interpretation for chronic patients.",
        date: "Jul 12, 2025",
      },
      {
        id: "b4",
        title: "Long-Term Care: Building Adherence",
        excerpt: "Simple routines and remote care tips that improve outcomes.",
        date: "Jun 2, 2025",
      },
    ],
    plans: [
      {
        id: "p1",
        title: "12-Month Managed Care",
        features: [
          "Quarterly specialist review",
          "24/7 nurse helpline",
          "Medication refills",
        ],
        price: "৳ 18,000/yr",
      },
      {
        id: "p2",
        title: "6-Month Intensive Support",
        features: [
          "Monthly tests & counseling",
          "Dietitian sessions",
          "Remote monitoring",
        ],
        price: "৳ 10,500/6mo",
      },
      {
        id: "p3",
        title: "Pay-As-You-Go Care",
        features: ["One-off specialist consults", "Customized test bundles"],
        price: "From ৳ 1,500",
      },
      {
        id: "p4",
        title: "Family Chronic Care Plan",
        features: [
          "Covers up to 4 family members",
          "Shared health records",
          "Discounted test packages",
        ],
        price: "৳ 30,000/yr",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] text-white">
        {/* Decorative blurred circles */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white blur-3xl opacity-20" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl opacity-20" />
        </div>

        {/* subtle icon pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-10 gap-6 transform rotate-12 -translate-y-24">
            {Array.from({ length: 30 }).map((_, i) => (
              <HeartPulse key={i} className="w-8 h-8" />
            ))}
          </div>
        </div>

        <div className="relative w-11/12 mx-auto py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <HeartPulse className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">
                Specialized Chronic Care
              </span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl opacity-95 mb-8">
              {data.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="btn-primary px-6 py-3 text-lg">
                Book a Consultation
              </button>
              <button className="btn-primary bg-white/10 hover:bg-white/20 px-6 py-3 text-lg">
                <Play className="mr-2 w-4 h-4 inline" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* wave */}
        <div className="w-full -mb-1">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 text-white"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </header>

      <div className="w-11/12 mx-auto py-12 md:py-16">
        {/* Test packages */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-10">
            Test & Diagnostic Packages
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {data.tests.map((test) => (
              <div
                key={test.id}
                className="flex flex-col justify-between h-[250px] bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-2">{test.name}</h3>
                  <h2 className="font-bold text-sky-700">{test.price}</h2>
                  <p className="text-sm text-slate-600 mb-3">{test.desc}</p>
                </div>
                <div className="flex justify-between items-center gap-3 pt-5">
                  <button className="btn-primary px-4 py-2">Book Test</button>
                  <button className="px-4 py-2 border rounded-lg text-sm cursor-pointer">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Doctors */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-10">
            Specialist Doctors
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {data.doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-1">{doc.name}</h3>
                <p className="text-sm text-sky-700 mb-1">{doc.spec}</p>
                <p className="text-sm text-slate-600">Experience: {doc.exp}</p>
                <p className="text-sm text-slate-600 mb-2">
                  Hospital: {doc.hospital}
                </p>
                <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded">
                  {doc.disease}
                </span>
                <div className="ml-auto pt-5 pb-2">
                  <button className="btn-primary px-3 py-2">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="btn-primary px-6 py-3">See All Doctors</button>
          </div>
        </section>

        {/* Blogs */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-10">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {data.blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{blog.excerpt}</p>
                <span className="text-xs text-slate-400">{blog.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Plans */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-10">
            Long-Term Care Plans
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {data.plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
              >
                <h3 className="font-semibold text-lg mb-2">{plan.title}</h3>
                <ul className="text-sm text-slate-600 mb-3 list-disc list-inside flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="font-bold text-sky-700 mb-3">{plan.price}</div>
                <button className="btn-primary mt-auto">Choose Plan</button>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-4 bg-gradient-to-r from-sky-100 to-sky-50 p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">
                Ready to start a personalized care plan?
              </h3>
              <p className="text-sm text-slate-600">
                Our team will help you choose the right tests and care pathway.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="btn-primary px-6 py-3">Get Started</button>
              <button className="px-6 py-3 border rounded-lg">
                Contact Us
              </button>{" "}
            </div>
          </div>
        </section>
      </div>

      {/* Closing */}
      <div className="bg-gradient-to-r from-[#0E6BA8] to-[#00A8E8] text-white py-16 px-6 text-center">
        <div className="w-11/12 mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Committed to Your Health Journey
          </h2>
          <p className="text-lg opacity-90">
            At Spondon Care, our mission goes beyond offering medical services.
            We aim to be a lifelong partner in your wellness journey, ensuring
            every patient receives compassionate care, cutting-edge diagnostics,
            and ongoing guidance to live a healthier, fuller life.
          </p>
        </div>
      </div>
    </div>
  );
}
