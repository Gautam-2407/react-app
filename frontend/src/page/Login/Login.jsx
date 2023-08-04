import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="contain">

  <div className="login-form">
   <h1>Login</h1>
   <form>
   <input type="text" name="username" placeholder="Username" />
   <input type="password" name="password" placeholder="Password" />
   <div className="password">
    <Link to="/">Forget Password</Link>
   </div>
   <input type="submit" value="Login" />
   <div className="singin">
    Not a Member?
    <Link to="/register">Sign In</Link>
   </div>
   </form>
   </div>
    </div>
  )
}

export default Login