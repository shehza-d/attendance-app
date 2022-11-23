import React from "react";
import { Link, Navigate } from "react-router-dom";
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
      <button onClick={async () => await signOut(auth)}>LogOut</button>
      <h1>Hello</h1>
      <Link to="/attendance">Attendance</Link>
      <br />
      <br />
      <Link to="/addCourse">AddCourse</Link>
      <br />
      <br />
      <Link to="/addStudents">AddStudents</Link>
      <br />
      <br />
      <Link to="/showAllClasses">showAllClasses</Link>
      <br />
      <br />
      {/* <Link to="/login">LogIn</Link>
      <Link to="/signup">SignUp</Link> */}
    </>
  );
}
