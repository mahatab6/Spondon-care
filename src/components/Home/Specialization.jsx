import React from "react";

const specializations = [
  { id: 1, name: "Cardiology", doctors: "45+", icon: "❤️" },
  { id: 2, name: "Pediatrics", doctors: "38+", icon: "👶" },
  { id: 3, name: "Orthopedics", doctors: "52+", icon: "🦴" },
  { id: 4, name: "Dermatology", doctors: "29+", icon: "🧴" },
  { id: 5, name: "Neurology", doctors: "31+", icon: "🧠" },
  { id: 6, name: "Gynecology", doctors: "42+", icon: "👩‍⚕️" },
];

const Specialization = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Find Doctors by Specialization
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Choose from a wide range of specialties and get appointments with
        verified doctors
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {specializations.map((spec) => (
          <div
            key={spec.id}
            className="p-6 border rounded-2xl shadow-md bg-white dark:bg-gray-800 
                       transform transition duration-300 hover:-translate-y-2 hover:shadow-xl text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 text-4xl">{spec.icon}</div>

            {/* Info */}
            <h2 className="text-lg font-semibold">{spec.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {spec.doctors} Doctors
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
