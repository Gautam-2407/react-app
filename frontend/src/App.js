import React from "react";
 import {Routes, Route } from "react-router-dom";
 import Register from "./page/Register/Register";
 import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";

import './App.css';


function App() {
  return (
    

    <div className="App">
      
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/dashboard" Component={Dashboard} />
        
      </Routes>
             
            

    
    </div>
  );
}

export default App;
