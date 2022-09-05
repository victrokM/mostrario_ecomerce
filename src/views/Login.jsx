import React from "react";
import '../css/Login.css';

function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  }

  return (
    <div>
      <div className="container_login">
        
        <h1>Login</h1>
        <form className="Form_login">
          <input type="Email" className="Email" placeholder="Enter your email address" />
          <input type="password" name="" id="" className="Password" placeholder="Enter your password" />
          <button className="login_button" onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
