import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./components/Login";
import Home from "./components/home/index";
import AddCourse from "./components/addCourse/index";
import Attendance from "./components/attendance/index";
import AddStudents from "./components/addStudent/index";
import ShowAllClasses from "./components/showAllClasses/index.jsx";
// import { auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App(props) {
  // const App=()=> {
  // function App() {
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
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
          <Route path="addCourse" element={<AddCourse />} />
          <Route path="addStudents" element={<AddStudents />} />
          <Route path="showAllClasses" element={<ShowAllClasses />} />
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

// export default App;
