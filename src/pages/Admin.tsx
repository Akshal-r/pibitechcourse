import React, { useEffect, useState } from "react";
import axios from "axios";

interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
}

interface Student {
  _id: string;
  name: string;
  email: string;
}

const AdminPanel: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [students, setStudents] = useState<{ [key: string]: Student[] }>({});
  const [newCourse, setNewCourse] = useState<Omit<Course, "_id">>({
    title: "",
    description: "",
    image: "",
    instructor: "",
  });

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  const BACKEND_URL = "https://pibitech-backend-olwb.onrender.com";

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/courses`);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  const fetchStudents = async (courseId: string) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/students/${courseId}`);
      setStudents((prev) => ({ ...prev, [courseId]: response.data }));
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  const handleAddCourse = async () => {
    try {
      await axios.post(`${BACKEND_URL}/courses`, newCourse);
      setNewCourse({ title: "", description: "", image: "", instructor: "" });
      fetchCourses();
    } catch (error) {
      console.error("Error adding course", error);
    }
  };

  const handleDeleteCourse = async (id: string) => {
    try {
      await axios.delete(`${BACKEND_URL}/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course", error);
    }
  };

  const handleLogin = () => {
    if (
      loginData.username === ADMIN_USERNAME &&
      loginData.password === ADMIN_PASSWORD
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchCourses();
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg">
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mb-2 w-full"
          value={newCourse.title}
          onChange={(e) =>
            setNewCourse({ ...newCourse, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 mb-2 w-full"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 mb-2 w-full"
          value={newCourse.image}
          onChange={(e) =>
            setNewCourse({ ...newCourse, image: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Instructor"
          className="border p-2 mb-4 w-full"
          value={newCourse.instructor}
          onChange={(e) =>
            setNewCourse({ ...newCourse, instructor: e.target.value })
          }
        />
        <button
          onClick={handleAddCourse}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{course.title}</h3>
            <p className="text-sm text-gray-600">{course.description}</p>
            <p className="text-sm font-semibold mt-1">
              Instructor: {course.instructor}
            </p>

            <div className="flex justify-between mt-4">
              <button
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                onClick={() => handleDeleteCourse(course._id)}
              >
                Delete
              </button>
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                onClick={() => fetchStudents(course._id)}
              >
                View Students
              </button>
            </div>

            {students[course._id] && (
              <div className="mt-4">
                <h4 className="font-semibold mb-1">Registered Students:</h4>
                <ul className="text-sm list-disc list-inside">
                  {students[course._id].map((student) => (
                    <li key={student._id}>
                      {student.name} ({student.email})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
