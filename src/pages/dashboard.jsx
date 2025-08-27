// src/pages/AdminTable.jsx
import React, { useEffect, useState } from "react";
import { database, auth } from "../firebase"; 
import { ref, onValue } from "firebase/database";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminTable = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null); // store logged-in user
  const navigate = useNavigate();

  // Track logged-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login"); // redirect if no session
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Fetch booking submissions
  useEffect(() => {
    const dbRef = ref(database, "popupEnquiries");
    onValue(dbRef, (snapshot) => {
      const records = snapshot.val();
      const formatted = records
        ? Object.entries(records).map(([id, values]) => ({
            id,
            ...values,
          }))
        : [];
      setData(formatted);
    });
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // ✅ ends session
      navigate("/login"); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        
        {/* Header Section with Logout */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-600">
            Booking Submissions
          </h2>
          <div className="flex items-center gap-4">
            {user && (
              <span className="text-gray-600 text-sm">
                {user.email}
              </span>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Id</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Mobile</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">Date/Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((entry, idx) => (
                <tr key={entry.id}>
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.email}</td>
                  <td className="px-4 py-2">{entry.mobile}</td>
                  <td className="px-4 py-2">{entry.message}</td>
                  <td className="px-4 py-2">
                    {entry.timestamp
                      ? new Date(entry.timestamp).toLocaleString("en-IN")
                      : "N/A"}
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center px-4 py-6 text-gray-500"
                  >
                    No submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
