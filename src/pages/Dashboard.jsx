import React from "react";
import { FaFilm, FaUsers, FaThList } from "react-icons/fa";

export default function Dashboard() {
  const stats = [
    {
      label: "Total Movies",
      value: 100,
      icon: <FaFilm className="text-yellow-400 text-3xl" />,
    },
    {
      label: "Total Users",
      value: 25,
      icon: <FaUsers className="text-yellow-400 text-3xl" />,
    },
    {
      label: "Genres Available",
      value: 6,
      icon: <FaThList className="text-yellow-400 text-3xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f] border border-yellow-500 rounded-lg shadow p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            {stat.icon}
            <h2 className="text-4xl font-bold mt-4">{stat.value}</h2>
            <p className="mt-2 text-yellow-400 font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
