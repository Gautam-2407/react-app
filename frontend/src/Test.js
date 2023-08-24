import React, { useState } from 'react'
 import { useNavigate } from 'react-router';
import { registerfunction } from './services/apis';



const Test=()=>{

    const[username, setUsername]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
         const navigate=useNavigate("");
         
         const  handleClick = async (e)=> {
            e.preventDefault();
            console.log("Enter username");   
                try {
                    console.log("register");
                    const response = await registerfunction(username, email, password);
                    console.log(response);
                    navigate("/Test");
                    console.log(username, password);
            }
            catch(error){
                console.log(error);
            }
          }
  return (
    <div>
        <div className="reg-box"  style={{marginTop:"200px", marginLeft:"290px"}}>   
        <label htmlFor='username'>Username</label>
        <input type="text" name="username" placeholder="Enter your name"  value={username} onChange={(e)=>setUsername(e.target.value)} />
         <label htmlFor="email">Email</label>
         <input type="email" name="email" placeholder="email"  value={email}  onChange={ (e)=>setEmail(e.target.value)}/>
         <label htmlFor="password">Password</label>
         <input type="password" name="password" placeholder="Enter your Password" value={password} onChange={ (e)=>setPassword(e.target.value)} />
         <div className="reg-button">
            <input type="submit" value="Click"  onClick={handleClick} /> 
         </div>
        </div>
    </div>
  )
}

export default Test;
