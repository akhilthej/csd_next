"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../context/AuthContext";
import { Fetch_all_data } from "../../../../../hooks/ApisUrl";

export default function WebsitePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [renewals, setRenewals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent fetch before user is ready
    if (user === null) return;

    if (!user) {
      router.push("/auth/login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = awaitfetch(Fetch_all_data);
        const json = await res.json();

        if (json.success && json.data?.hosting_renewals) {
          const userRenewals = json.data.hosting_renewals.filter(
            (item) => Number(item.customer_userId) === Number(user.id)
          );
          setRenewals(userRenewals);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, router]);

  if (user === null) {
    // Still loading user context
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-blue-600">Loading user...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Your Hosting Renewals
        </h1>

        {loading ? (
          <div className="text-center text-blue-500 font-medium">Loading renewals...</div>
        ) : renewals.length === 0 ? (
          <div className="text-center text-gray-600">No renewals found.</div>
        ) : (
          renewals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 mb-5 border-l-4 border-blue-500"
            >
              <p className="text-lg font-semibold text-blue-700 mb-1">{item.user_name}</p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Domain:</strong>{" "}
                <a
                  href={item.user_domain}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.user_domain}
                </a>
              </p>
              <p className="text-sm text-gray-600">
                <strong>Purchased:</strong> {item.purchased_date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Expiry:</strong> {item.expiry_date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tier:</strong> {item.tier}
              </p>
              {item.notes && (
                <p className="text-sm text-gray-600">
                  <strong>Notes:</strong> {item.notes}
                </p>
              )}
              {item.invoice_paynow_url && (
                <a
                  href={item.invoice_paynow_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Pay Now
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
