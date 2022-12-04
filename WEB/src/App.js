import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./components/Login";
import Home from "./components/home/index";
import Courses from "./components/courses/index";
import Attendance from "./components/attendance/index";
import Students from "./components/student/index";
// import { auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App(props) {

  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();
  useEffect(() => {
    const Unsubscribe =    onAuthStateChanged(auth, (user) => {
      console.log(user);
      // const uid = user.uid;
      if (user) setIsLogin(true);
      else setIsLogin(false);
  console.log(`Shehzad 1`);
    
    });
  console.log(`Shehzad 2`);

  // return () => Unsubscribe();
  }, []);
  console.log(`Shehzad outside3`);

  return (
    <div className="App">
      {isLogin ? (
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="attendance" element={<Attendance />} />
          <Route path="courses" element={<Courses />} />
          <Route path="students" element={<Students />} />
          {/* <Route path="profile" element={<Profile />} /> */}

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      )}
    </div>
  );
}
