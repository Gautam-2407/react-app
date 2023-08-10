import React, {useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import {login} from "../../services/apis"




function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelclick = async (e) =>{
    e.preventDefault();
    console.log("login started");
    try
    {
      const response = await login(username);
      console.log(response);
      if (response && response.exist){
        console.log("in for loop");
        console.log(response.username);
      }
      else{
              console.log("not in for loop");

            }
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="container-login">
      <div className="login-form">
        <h1>Login</h1>
        <form className="form-wrapper">
          <input type="text" name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <div className="password">
            <Link to="/">Forget Password</Link>
          </div>
          <input type="submit" value="Login" onClick={handelclick}/>
          <div className="singin" >
            Not a Member?
            <Link to="/register">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
