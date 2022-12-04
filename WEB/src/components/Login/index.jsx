import React, { useState } from "react";
import "./index.css";
import { auth } from "../../firebase";
import { useFormik } from "formik";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import * as yup from "yup";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  //function to show password
  const [showPswIcon, setShowPswIcon] = useState("eyeOpen");
  const pass1 = document.querySelector("#userPassword");
  const show_password = () => {
    if (pass1.type === "password") {
      pass1.type = "text";
      setShowPswIcon("eyeClose");
    } else {
      pass1.type = "password";
      setShowPswIcon("eyeOpen");
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: yup.object({
        email: yup
          .string("Enter your email")
          .email("Enter valid email")
          .required("Email is required")
          .min(3, "Please enter more then 3 characters ")
          .max(32, "Please enter within 32 characters "),
        password: yup
          .string("Enter your Password") //.password()
          .required("Password is required")
          .min(6, "Please enter more then 6 characters ")
          .max(64, "Please enter within 64 characters "),
      }),
      onSubmit: async (inputValues) => {
        console.log(inputValues);
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            inputValues.email,
            inputValues.password
          );
          console.log(userCredential);
          setSuccessMsg("Login in Successfull.");
          setErrorMsg("");
          navigate("/");
        } catch (err) {
          console.log(err);
          setErrorMsg(err.message, err.code);
        }
        console.log(errors);
      },
    });
  return (
    <div className="loginContainer">
      <h1>Attendance Management System</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login Here!</h2>
        {successMsg && <div className="successMsg">{successMsg}</div>}
        {errorMsg && <div className="errorMsg">{errorMsg}</div>}
        <label>Email</label>
        <input
          className="input"
          id="email"
          type="email"
          placeholder="Enter your email"
          name="email"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && Boolean(errors.email) ? (
          <span className="errorSpan">{errors.email}</span>
        ) : null}
        <label>Password</label>
        <input
          id="userPassword"
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="button" className="showPswBtn" onClick={show_password}>
          {showPswIcon === "eyeOpen" ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
        {touched.password && Boolean(errors.password) ? (
          <span className="errorSpan">{errors.password}</span>
        ) : null}
        <button type="submint" className="submitBtn">
          Login
        </button>
      </form>
    </div>
  );
}
