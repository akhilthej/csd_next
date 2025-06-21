"use client";
import { useEffect, useState } from "react";
import { CONTACTUS_API } from "../../../hooks/ApisUrl";

const AdminContact = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const response = await fetch(CONTACTUS_API);
      const data = await response.json();
      setSubmissions(data);
      setLoading(false);
    };
    fetchSubmissions();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`${CONTACTUS_API}?id=${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setSubmissions(submissions.filter((submission) => submission.id !== id));
    }
  };

  const handleStatusChange = async (id, currentStatus) => {
    const newStatus = currentStatus === "pending" ? "completed" : "pending";
    const response = await fetch(CONTACTUS_API, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `id=${id}&status=${newStatus}`,
    });

    if (response.ok) {
      setSubmissions(
        submissions.map((submission) =>
          submission.id === id ? { ...submission, status: newStatus } : submission
        )
      );
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Submissions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Phone</th>
              <th className="py-3 px-4 border-b">Message</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{submission.name}</td>
                <td className="py-2 px-4 border-b">{submission.email}</td>
                <td className="py-2 px-4 border-b">{submission.phone}</td>
                <td className="py-2 px-4 border-b">{submission.message}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleStatusChange(submission.id, submission.status)}
                    className={`py-1 px-3 rounded ${
                      submission.status === "pending"
                        ? "bg-yellow-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {submission.status}
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDelete(submission.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContact;
