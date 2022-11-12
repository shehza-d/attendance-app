import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

// import Login from "./components/Login/index";
import Home from "./components/home/index";
import AddCourse from "./components/addCourse/index";
// import Login from "./components/Login/index";
// import Login from "./components/Login/index";
// import Login from "./components/Login/index";
// import { auth } from "./firebase";

function App() {
  const [isLogin, setIsLogin] = useState(true);

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

          {/* to remove */}
          <Route path="addCourse" element={<AddCourse />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* to remove */}

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          {/* <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>} /> */}
          {/* <Route path="signup" element={<Signup />} /> */}
          {/* <Route path="*" element={<Navigate to="/login" replace={true} />} /> */}
        </Routes>
      )}
    </div>
  );
}

export default App;
