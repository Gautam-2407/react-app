import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./page/Register/Register";
import './App.css';
import Private from "./page/Private/Private";





function App() {
  

  const handleLogout = () => {
    sessionStorage.removeItem("auth_token");
    window.location.replace("/");
  };


  return (
    <div className="New_App">

           <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login onLogout={handleLogout} />} />
          {/* Private Routes */}
          <Route
            path="/dashboard"
            element={<Private onLogout={handleLogout} />}
          >
            <Route index element={<Dashboard />} />

          </Route>
          <Route path="/register" element={<Register />} />

          




        
        </Routes>
       
    </div>
  );
}

export default App;
