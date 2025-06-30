"use client";
import React from "react";
import Link from "next/link";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaBullhorn } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      name: "Websites",
      href: "/auth/dashboard/services/websites",
      icon: <FaLaptopCode className="text-white text-xl" />,
      color: "bg-blue-600",
    },
    {
      name: "Apps",
      href: "/services/apps",
      icon: <FaMobileAlt className="text-white text-xl" />,
      color: "bg-green-600",
    },
    {
      name: "Digital Marketing",
      href: "/services/digital-marketing",
      icon: <FaBullhorn className="text-white text-xl" />,
      color: "bg-purple-600",
    },
    {
      name: "Graphic Designing",
      href: "/services/graphic-designing",
      icon: <FaPaintBrush className="text-white text-xl" />,
      color: "bg-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        {services.map((service, index) => (
          <Link key={index} href={service.href}>
            <div
              className={`flex items-center justify-between gap-4 px-5 py-4 rounded-xl shadow-lg text-white font-semibold hover:opacity-90 transition cursor-pointer ${service.color}`}
            >
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full">
                  {React.cloneElement(service.icon, {
                    className: "text-xl text-" + service.color.replace("bg-", ""),
                  })}
                </div>
                <span className="text-lg">{service.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
