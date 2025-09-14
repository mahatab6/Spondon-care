import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${
          i <= rating ? "text-yellow-400" : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex items-center">{stars}</div>;
};

const DoctorReviews = () => {
  const reviewsData = [
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      avatarUrl: "https://placehold.co/100x100/E2E8F0/4A5568?text=Dr.+J",
      rating: 5,
      reviewText:
        "Dr. Johnson was incredibly attentive and thorough during my visit. She explained everything clearly and made me feel at ease. I highly recommend her to anyone seeking cardiac care.",
      reviewerName: "John Doe",
      reviewDate: "August 15, 2023",
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      specialty: "Pediatrician",
      avatarUrl: "https://placehold.co/100x100/D4F1F4/172A3A?text=Dr.+C",
      rating: 5,
      reviewText:
        "Our kids absolutely love Dr. Chen. He has a wonderful demeanor with children and is always so patient and understanding. The best pediatrician we've ever had!",
      reviewerName: "Jane Smith",
      reviewDate: "August 12, 2023",
    },
    {
      id: 3,
      doctorName: "Dr. Emily Carter",
      specialty: "Dermatologist",
      avatarUrl: "https://placehold.co/100x100/FEE2E2/991B1B?text=Dr.+E",
      rating: 4,
      reviewText:
        "Great experience at Dr. Carter's clinic. The staff was friendly, and the wait time was minimal. My skin condition has improved significantly after following her advice.",
      reviewerName: "David Lee",
      reviewDate: "August 10, 2023",
    },
    {
      id: 4,
      doctorName: "Dr. Benjamin Turner",
      specialty: "Orthopedic Surgeon",
      avatarUrl: "https://placehold.co/100x100/E0E7FF/3730A3?text=Dr.+T",
      rating: 5,
      reviewText:
        "Dr. Turner performed my knee surgery, and the results have been fantastic. His expertise and confidence are reassuring. The entire process was smooth from start to finish.",
      reviewerName: "Maria Garcia",
      reviewDate: "August 5, 2023",
    },
  ];
  return (
    <div className="bg-gray-50 font-sans my-16 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            What Our Patients Say
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Honest reviews from patients who trust us with their care.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col transition-transform transform hover:scale-105"
            >
              {/* Card Header */}
              <div className="flex items-center mb-4">
                <img
                  src={review.avatarUrl}
                  alt={review.doctorName}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-100"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {review.doctorName}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {review.specialty}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed flex-grow">
                "{review.reviewText}"
              </p>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 text-right">
                <p className="font-semibold text-sm text-gray-800">
                  {review.reviewerName}
                </p>
                <p className="text-xs text-gray-500">{review.reviewDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorReviews;
