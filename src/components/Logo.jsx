import React from "react";
import "../css/Logo.css";
import { FaUserAlt, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <div className="container_logo">
        <Link to="/" className="logo">
          <FaApple/>
          <p>DECORPISOS</p>
        </Link>
        <Link to="/login" className="login_container">
          <FaUserAlt className="login" />
        </Link>
      </div>
    </div>
  );
}

export default Logo;
