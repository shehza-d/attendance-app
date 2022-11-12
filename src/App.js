import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Login/index";
import Home from "./components/home/index";
import AddCourse from "./components/addCourse/index";
// import Login from "./components/Login/index";
// import Login from "./components/Login/index";
// import Login from "./components/Login/index";
// import { auth } from "./firebase";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      {isLogin ? (
        <Routes>
          <Route
            path="/"
            element={
              <>
             <Home/>
              </>
            }
          />

          {/* <Route path="attendance" element={<Attendance />} />
          <Route path="addCourse" element={<AddCourse />} />
          <Route path="addStudents" element={<AddStudents />} />
          <Route path="showAllClasses" element={<ShowAllClasses />} />
          <Route path="profile" element={<Profile />} /> */}

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>} />
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

// "dependencies": {
//   "@testing-library/jest-dom": "^5.16.5",
//   "@testing-library/react": "^13.4.0",
//   "@testing-library/user-event": "^13.5.0",
//   "firebase": "^9.13.0",
//   "moment": "^2.29.4",
//   "react": "^18.2.0",
//   "react-dom": "^18.2.0",
//   "react-icons": "^4.6.0",
//   "react-router-dom": "^6.4.3",
//   "react-scripts": "5.0.1",
//   "web-vitals": "^2.1.4",
// },