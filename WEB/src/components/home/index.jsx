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
import Button from '@mui/material/Button';


export default function Home(props) {
  const auth = getAuth();
  return (
    <>
    <nav>
      <h1>Hello</h1>
      <button onClick={async () => await signOut(auth)}>LogOut</button>
    </nav>
      <div className="btnDiv">
      <Button variant="contained"><Link to="/attendance">Attendance</Link></Button>
      <br />
      <Button variant="contained"><Link to="/courses">Courses</Link></Button>
     <br />
      <Button variant="contained"><Link to="/students">Students</Link></Button>
        
        {/* <Link to="/showAllCourses">showAllCourses</Link> */}
      </div>
      {/* <Link to="/login">LogIn</Link>
      <Link to="/signup">SignUp</Link> */}
    </>
  );
}
