import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";
// import { auth } from "./firebase-config";

export default function Home(props) {
  const auth = getAuth();
  return (
    <>
    <nav>
      <h1>Hello</h1>
      <button onClick={async () => await signOut(auth)}>LogOut</button>
    </nav>
      <div className="btnDiv">
        <Link to="/attendance">Attendance</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/students">Students</Link>
        {/* <Link to="/showAllCourses">showAllCourses</Link> */}
      </div>
      {/* <Link to="/login">LogIn</Link>
      <Link to="/signup">SignUp</Link> */}
    </>
  );
}
