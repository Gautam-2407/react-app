import React from "react";
import {Routes, Route } from "react-router-dom";
import Login from "./page/Login/Login";
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= '/' Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
