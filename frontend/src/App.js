import React from "react";
 import {Routes, Route } from "react-router-dom";
 import Register from "./page/Register/Register";
 import Login from "./page/Login/Login";
import Dashboard from "./page/Dashboard/Dashboard";
import Drawer from "./components/drawer/Drawer";
import Test from "./Test";import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Test2 from "./Test2";


function App() {
  return (
    

    <div className="App">
      
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/drawer" Component={Drawer}/>
        <Route path="/Test" Component={Test} />
        <Route path="/Test2" Component={Test2} />
      </Routes>
             
            

    
    </div>
  );
}

export default App;
