import React, {useState} from "react";
import {  Link, useNavigate } from "react-router-dom";
import "./register.css";
import {registerfunction} from "../../services/apis"

function Register() {
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();

  const handleClick= async (e)=>{
    e.preventDefault();
    console.log("Register button clicked");
    try{
      console.log("Register");
     const response = await registerfunction(username, email, password);

      console.log(response);
      navigate("/")
   }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="main-register">
      <div class="container-register">
        <h2>Registration Form</h2>
        <form className="register-form-wrapper">
          <div class="form-group">
            <input type="text" id="username" name="username" placeholder="username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <input type="submit" value="Register" onClick={handleClick} />
          </div>
        </form>
      <div className="login2">
        Already Menber
        <Link to="/">Login</Link>
      </div>
      </div>
    </div>

    // <div className="container">
    //     <span className="centering">
    //       <form className="my-form">
    //         <span className="login-welcome-row">

    //           <h1>Profile</h1>
    //         </span>
    //         <div className="text-field">
    //           <label htmlFor="username">Full Name</label>
    //           <input
    //             type="text"
    //             id="username"
    //             name="username"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //             placeholder="Enter Name"
    //           />
             
    //         </div>
    //         <div className="text-field">
    //           <label htmlFor="email">Email Address</label>
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             placeholder="Enter Email"
    //             required
    //           />
              
    //         </div>
    //         <div className="text-field">
    //           <label htmlFor="password">Phone Number</label>
    //           <input
    //             type="password"
    //             id="password"
    //             name="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             placeholder="Enter Phone Number"
                
    //             required
    //           />
              
    //         </div>
    //         <div className="Get_Otp">
    //           <input
    //             type="submit"
    //             className="my-form__button"
    //             value="Submit"
    //             onClick={handleClick}
    //           />
    //         </div>
            
    //       </form>
    //     </span>
    //   </div>
  );
}

export default Register;
