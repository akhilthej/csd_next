"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HomeCommunityCover } from "../../../public/images";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
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

      <h2 className="text-2xl font-bold text-blue-600 mb-1">
        Welcome, {session?.user?.name}
      </h2>
      <p className="text-gray-600 mb-2">{session?.user?.email}</p>
      <p className="text-gray-500">Phone: {session?.user?.phone_number}</p>

<Link href="/auth/contactus">
      <div
        
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        contactus
      </div></Link>


      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
}
