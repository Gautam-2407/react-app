import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { registerfunction } from './services/apis';



const Test=(e)=>{

    const[username, setusername]=useState("");
    const[email, setemail]=useState("");
    const[password, setpassword]=useState("");
         
          const navigate=useNavigate("");
         const  handleClick = async (e)=>{
            e.preventDefault();
            console.log("Enter username");   {
                try {
                    const res = await registerfunction(username, email, password);
                    console.log(res);
                    navigate("/Test");
            }
            catch(error){
                console.log(error);
            }
          }}
  return (
    <div>
        <div className="reg-box"  style={{marginTop:"200px", marginLeft:"290px"}}>   
        <label htmlFor='username'>Username</label>
        <input type="text" name="username" placeholder="Enter your name"  value={username} onChange={(e)=>setusername(e.target.value)} />
         <label htmlFor="email">Email</label>
         <input type="email" name="email" placeholder="email"  value={email}  onChange={ (e)=>setemail(e.target.value)}/>
         <label htmlFor="password">Password</label>
         <input type="password" name="password" placeholder="Enter your Password" value={password} onChange={ (e)=>setpassword(e.target.value)} />
         <div className="reg-button">
            <input type="submit" value="Click"  onClick={handleClick} /> 
         </div>
        </div>
    </div>
  )
}

export default Test;
