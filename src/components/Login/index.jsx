import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  //   const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMsg("Login in Successfull.");
        setPassword("");
        setEmail("");
        setErrorMsg("");
        // props.setIsLogin(true);
        // navigate("/home");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setIsLogin(true);
      console.log("Login Hai", user);
      // ...
    } else {
      // ...
      console.log("Login nahi Hai");
      setIsLogin(false);
    }
  });

  return (
    <div className="loginContainer">
      <form className="loginForm">
        <p>Login</p>
        {successMsg && (
          <>
            <div className="success-msg">{successMsg}</div>
          </>
        )}
        {errorMsg && (
          <>
            <div className="error-msg">{errorMsg}</div>
          </>
        )}

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
};

export default Login;
