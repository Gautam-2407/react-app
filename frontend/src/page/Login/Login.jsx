import React, {useState} from "react";
import { User, Fingerprint } from "lucide-react";
import "./Login.css";
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
    <div className="container">
    <span className="centering">
      <form className="my-form">
        <span className="login-welcome-row">
          <h1>Login Form</h1>
          <h4>Welcome to Login Form</h4>
        </span>
        <div className="text-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your Username"
            required
            value={username} onChange={(e) => setUsername(e.target.value)}
          />
          <User color="#3574F2" strokeWidth={1.5} />
        </div>
        <div className="text-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your password"
            required
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <Fingerprint color="#3574F2" strokeWidth={1.5} />
        </div>
        <div className="login-button">
          <input type="submit" value="Login" name="submit" className="my-form__button" onClick={handelclick}/>
        </div>
      </form>
    </span>
  </div>
  );
}

export default Login;
