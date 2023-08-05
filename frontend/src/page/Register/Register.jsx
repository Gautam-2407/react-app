import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="main-register">
      <div class="container-register">
        <h2>Registration Form</h2>
        <form>
          <div class="form-group">
            <input type="text" id="username" name="username" placeholder="username" required />
          </div>
          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="confirm-password"
              required
            />
          </div>
          <div class="form-group">
            <input type="submit" value="Register" />
          </div>
        </form>
      <div className="login2">
        Already Menber
        <Link to="/">Login</Link>
      </div>
      </div>
    </div>
  );
}

export default Register;
