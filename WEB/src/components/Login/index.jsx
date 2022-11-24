import React, { useState } from "react";
import './index.css'
import { auth } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  //   const auth = getAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setSuccessMsg("Login in Successfull.");
        setPassword("");
        setEmail("");
        setErrorMsg("");
        navigate("/ygy");
      })
      .catch((error) => setErrorMsg(error.message, error.code));
  };
  return (
    <div className="loginContainer">
      <h1>Attendance Management System</h1>
      <form className="loginForm">
        <h2>Login Here!</h2>
        {successMsg && <div className="successMsg">{successMsg}</div>}
        {errorMsg && <div className="errorMsg">{errorMsg}</div>}
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}
