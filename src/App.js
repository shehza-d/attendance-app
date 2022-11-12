import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
       {isLogin ? null : (
        <ul>
          <li>
            <Link to={`/`}>Login</Link>
          </li>
          <li>
            <Link to={`/signup`}>Signup</Link>
          </li>
        </ul>
      )}

      {isLogin ? (
        <Routes>
          <Route
            path="/"
            element={
              <>
             {/* <Home/> */}
              </>
            }
          />

          {/* to remove */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* to remove */}

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
