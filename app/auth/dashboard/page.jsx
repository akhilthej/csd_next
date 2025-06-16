"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || !storedUser.loggedIn) {
      router.push("/login");
    } else {
      setUser(storedUser);
    }
  }, [router]);

  if (!user) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Welcome, {user.email}</h2>
      <p className="mb-4">This is your secure dashboard.</p>
      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={() => {
          localStorage.removeItem("user");
          router.push("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
