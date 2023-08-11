import React from "react";
import { User, Fingerprint, Mail } from "lucide-react"
import "./register.css";

function Register() {
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
          />
          <User color="#3574F2" strokeWidth={1.5} />
        </div>
        <div className="text-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your email"
            required
          />
          <Mail color="#3574F2" />
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
          />
          <Fingerprint color="#3574F2" strokeWidth={1.5} />
        </div>
        <div className="login-button">
          <input type="submit" value="Login" name="submit" className="my-form__button" />
        </div>
      </form>
    </span>
  </div>
  );
}

export default Register;
