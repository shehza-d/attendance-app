import React from "react";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      Hello
      <Link to="/attendance">Attendance</Link>
      <Link to="/addCourse">AddCourse</Link>
      <Link to="/addStudents">AddStudents</Link>
      <Link to="/showAllClasses">showAllClasses</Link>
      {/* <Link to="/login">LogIn</Link>
      <Link to="/signup">SignUp</Link> */}
    </>
  );
};

export default Home;
