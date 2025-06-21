"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import { HomeCommunityCover } from "../../../public/images";
import Link from "next/link";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-blue-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-xl shadow-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
          <Image
            src={HomeCommunityCover}
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-blue-600 mb-1">Welcome, {user.name}</h2>
      <p className="text-gray-600 mb-2">{user.email}</p>
      <p className="text-gray-500">Phone: {user.phone_number}</p>

      <Link href="/auth/contactus">
        <div className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition">
          Contact Us
        </div>
      </Link>

      <button
        onClick={logout}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
}
