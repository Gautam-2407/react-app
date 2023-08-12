import React from "react";
import {Routes, Route } from "react-router-dom";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";
import './App.css';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path= '/' Component={Login} />
        <Route path= '/register' Component={Register} />
      </Routes>

    
    </div>
  );
}

export default App;
