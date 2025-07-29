import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [students, setStudents] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courses, setCourses] = useState([]);

  const BACKEND_URL = "https://pibitech-backend-olwb.onrender.com";

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/students`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Failed to fetch students:", err);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/courses`);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  const addCourse = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/courses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: courseName }),
      });
      if (res.ok) {
        setCourseName("");
        fetchCourses();
      }
    } catch (err) {
      console.error("Failed to add course:", err);
    }
  };

  const deleteCourse = async (id: string) => {
    try {
      await fetch(`${BACKEND_URL}/courses/${id}`, {
        method: "DELETE",
      });
      fetchCourses();
    } catch (err) {
      console.error("Failed to delete course:", err);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Admin Panel</h1>

      <section>
        <h2>Registered Students</h2>
        <ul>
          {students.map((student: any) => (
            <li key={student._id}>
              {student.name} - {student.email}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Courses</h2>
        <input
          type="text"
          placeholder="New course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <button onClick={addCourse}>Add Course</button>

        <ul>
          {courses.map((course: any) => (
            <li key={course._id}>
              {course.name}
              <button
                onClick={() => deleteCourse(course._id)}
                style={{ marginLeft: 10 }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminPanel;
