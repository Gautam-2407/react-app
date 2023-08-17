import React from "react";
 import {Routes, Route } from "react-router-dom";
 import Register from "./page/Register/Register";
 import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../src/components/Sidebar/Sidebar"
import './App.css';



function App() {
  return (
    

    <div className="App">
      
      <Routes>
        <Route path="register" Component={Register} />
        <Route path="sidebar" Component={Sidebar} />
        <Route path="/" Component={Login}>

        </Route>
        <Route path="dashboard" Component={  <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>} />
      </Routes>
             
            

    
    </div>
  );
}

export default App;
