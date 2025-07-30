import React, { useEffect, useState } from "react";
import axios from "axios";

interface Student {
  name: string;
  email: string;
  phone?: string;
}

interface Brochure {
  name: string;
  email: string;
}

const AdminPanel: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [brochures, setBrochures] = useState<Brochure[]>([]);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  const STUDENTS_URL = "https://pibitech-backend.onrender.com/students";
  const BROCHURE_URL = "https://pibitech-backend.onrender.com/downloads";

  const fetchData = async () => {
    try {
      const [studentsRes, brochureRes] = await Promise.all([
        axios.get(STUDENTS_URL),
        axios.get(BROCHURE_URL),
      ]);

      setStudents(studentsRes.data);
      setBrochures(brochureRes.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleLogin = () => {
    if (
      loginData.username === ADMIN_USERNAME &&
      loginData.password === ADMIN_PASSWORD
    ) {
      setIsLoggedIn(true);
      fetchData();
    } else {
      alert("Invalid credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="border p-2 mb-2 w-full"
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 mb-4 w-full"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Admin Panel</h1>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Registered Students</h2>
        {students.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Phone</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-center">
                    <td className="px-4 py-2 border">{student.name}</td>
                    <td className="px-4 py-2 border">{student.email}</td>
                    <td className="px-4 py-2 border">{student.phone || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No students registered yet.</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Brochure Downloads</h2>
        {brochures.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                </tr>
              </thead>
              <tbody>
                {brochures.map((brochure, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-center">
                    <td className="px-4 py-2 border">{brochure.name}</td>
                    <td className="px-4 py-2 border">{brochure.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No brochures downloaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
