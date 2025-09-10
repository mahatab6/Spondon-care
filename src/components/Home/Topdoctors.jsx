"use client"
import React from 'react'



export default function Topdoctors() {
    
  const doctors= [
    {
      "id": 1,
      "name": "Dr. Arif Rahman",
      "specialization": "Cardiologist",
      "email": "arif.rahman@example.com",
      "phone": "+880123456789",
      "experience": 12,
      "availability": "Mon-Fri, 9AM-5PM",
      "image": "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      "id": 2,
      "name": "Dr. Nusrat Jahan",
      "specialization": "Neurologist",
      "email": "nusrat.jahan@example.com",
      "phone": "+880987654321",
      "experience": 10,
      "availability": "Tue-Sat, 10AM-6PM",
      "image": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      "id": 3,
      "name": "Dr. Hasan Mahmud",
      "specialization": "Orthopedic Surgeon",
      "email": "hasan.mahmud@example.com",
      "phone": "+880112233445",
      "experience": 15,
      "availability": "Mon-Fri, 8AM-4PM",
      "image": "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      "id": 4,
      "name": "Dr. Shila Akter",
      "specialization": "Dermatologist",
      "email": "shila.akter@example.com",
      "phone": "+880998877665",
      "experience": 8,
      "availability": "Wed-Sun, 11AM-7PM",
      "image": "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      "id": 5,
      "name": "Dr. Tanvir Ahmed",
      "specialization": "Pediatrician",
      "email": "tanvir.ahmed@example.com",
      "phone": "+880556677889",
      "experience": 9,
      "availability": "Mon-Sat, 9AM-3PM",
      "image": "https://randomuser.me/api/portraits/men/29.jpg"
    },
    {
      "id": 6,
      "name": "Dr. Farhana Chowdhury",
      "specialization": "Gynecologist",
      "email": "farhana.chowdhury@example.com",
      "phone": "+880443322110",
      "experience": 14,
      "availability": "Tue-Fri, 10AM-5PM",
      "image": "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
      "id": 7,
      "name": "Dr. Mahfuz Karim",
      "specialization": "Psychiatrist",
      "email": "mahfuz.karim@example.com",
      "phone": "+880778899665",
      "experience": 11,
      "availability": "Mon-Fri, 1PM-8PM",
      "image": "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      "id": 8,
      "name": "Dr. Rupa Sultana",
      "specialization": "ENT Specialist",
      "email": "rupa.sultana@example.com",
      "phone": "+880221133445",
      "experience": 7,
      "availability": "Thu-Mon, 9AM-2PM",
      "image": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      "id": 9,
      "name": "Dr. Imran Hossain",
      "specialization": "Oncologist",
      "email": "imran.hossain@example.com",
      "phone": "+880332211554",
      "experience": 13,
      "availability": "Mon-Fri, 10AM-6PM",
      "image": "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      "id": 10,
      "name": "Dr. Samia Rahim",
      "specialization": "General Physician",
      "email": "samia.rahim@example.com",
      "phone": "+880667788990",
      "experience": 6,
      "availability": "Mon-Sat, 8AM-1PM",
      "image": "https://randomuser.me/api/portraits/women/72.jpg"
    }
  ]
  const handleClick=(id)=>{
    console.log(id);
    for(const i of doctors){
        if(id==i.id){
         alert(`appointment booked for ${i.name}`)
    }

    }
    
       
  }

  return (
   
   <div className="p-6">
  <h1 className="text-2xl font-bold mb-6 text-center">Top Doctors</h1>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {doctors.slice(0, 6).map((doc) => (
      <div
        key={doc.id}
        className="p-6 border rounded-2xl shadow-md bg-white dark:bg-gray-800 
                   transform transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
      >
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src={doc.image}
            alt={doc.name}
            className="w-24 h-24 rounded-full border-4 border-blue-500 dark:border-blue-400 object-cover 
                       transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Info */}
        <h2 className="text-xl font-semibold text-center">{doc.name}</h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          {doc.specialization}
        </p>

        <div className="mt-4 space-y-1 text-sm flex-1">
          <p>
            <span className="font-semibold">Email:</span> {doc.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {doc.phone}
          </p>
          <p>
            <span className="font-semibold">Experience:</span>{" "}
            {doc.experience} years
          </p>
          <p>
            <span className="font-semibold">Available:</span>{" "}
            {doc.availability}
          </p>
        </div>

        {/* Appointment Button */}
        <button
          onClick={()=>handleClick(doc.id)}
          className="mt-4 w-full btn-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Book Appointment
        </button>
      </div>
    ))}
  </div>
</div>

  )
}
