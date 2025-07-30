import React, { useState } from "react";
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
  const [selectedTab, setSelectedTab] = useState<
    "students" | "brochures" | "courses"
  >("students");

  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [modules, setModules] = useState<string[]>([""]);

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

  const handleModuleChange = (index: number, value: string) => {
    const newModules = [...modules];
    newModules[index] = value;
    setModules(newModules);
  };

  const addModule = () => {
    setModules([...modules, ""]);
  };

  const removeModule = (index: number) => {
    const newModules = modules.filter((_, i) => i !== index);
    setModules(newModules);
  };

  const handleAddCourse = () => {
    if (
      !courseName.trim() ||
      !courseDescription.trim() ||
      modules.length === 0
    ) {
      alert("Please fill in all course details and at least one module.");
      return;
    }

    const newCourse = {
      title: courseName,
      description: courseDescription,
      modules: modules.filter((m) => m.trim() !== ""),
    };

    console.log("New Course:", newCourse);
    alert(`Course "${courseName}" added!`);

    setCourseName("");
    setCourseDescription("");
    setModules([""]);
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
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md p-4 border-r">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-3">
          <li
            className={`cursor-pointer hover:text-blue-600 ${
              selectedTab === "students" ? "text-blue-700 font-semibold" : ""
            }`}
            onClick={() => setSelectedTab("students")}
          >
            Registered Students
          </li>
          <li
            className={`cursor-pointer hover:text-blue-600 ${
              selectedTab === "brochures" ? "text-blue-700 font-semibold" : ""
            }`}
            onClick={() => setSelectedTab("brochures")}
          >
            Brochure Downloads
          </li>
          <li
            className={`cursor-pointer hover:text-blue-600 ${
              selectedTab === "courses" ? "text-blue-700 font-semibold" : ""
            }`}
            onClick={() => setSelectedTab("courses")}
          >
            Add Course
          </li>
          <li
            className="cursor-pointer text-red-600 hover:underline"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Welcome Admin</h1>

        {selectedTab === "students" && (
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
                        <td className="px-4 py-2 border">
                          {student.phone || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                No students registered yet.
              </p>
            )}
          </div>
        )}

        {selectedTab === "brochures" && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Brochure Downloads List
            </h2>
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
              <p className="text-gray-500 text-sm">
                No brochures downloaded yet.
              </p>
            )}
          </div>
        )}

        {selectedTab === "courses" && (
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Add New Course</h2>

            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Course Title"
              className="border p-2 mb-4 w-full"
            />

            <textarea
              placeholder="Course Description"
              className="border p-2 mb-4 w-full"
              rows={3}
              onChange={(e) => setCourseDescription(e.target.value)}
              value={courseDescription}
            />

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Modules</h3>
              {modules.map((module, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder={`Module ${index + 1}`}
                    className="border p-2 flex-1"
                    value={module}
                    onChange={(e) => handleModuleChange(index, e.target.value)}
                  />
                  <button
                    onClick={() => removeModule(index)}
                    className="text-red-600 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={addModule}
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              >
                + Add Module
              </button>
            </div>

            <button
              onClick={handleAddCourse}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Submit Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
