import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { phoneValidation } from "../../services/apis"



const Protected=()=> {
    const response = phoneValidation();
    const navigate = useNavigate();
  if (response && response.exists) {
        
    console.log("in for loop");
    // console.log(response.username);
    
    navigate("/register");
    <Outlet />
     
  }
  else {
    console.log("not in for loop");
      window.location.replace("/");
    
}
    // else  {

    //     return (<Outlet />)
    // }
  
}

export default Protected