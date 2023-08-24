import React from 'react'

function loginp() {
  return (
    <div className="loginp-container">
        <div className="loginp-box">
            <input type="text" name="username" placeholder="Enter username" />
            <input type="password" name="password" placeholder="Enter password" />
            <input type="submit" name="login"  value="Login"  />
        </div>
      
    </div>
  )
}

export default loginp; 

