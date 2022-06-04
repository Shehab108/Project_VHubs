import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import "./Login.css";

export default function Login() {
  return (
    <div className="form-content">
      <div className="sidebar2">
        <ul>
          <li>
            <Link to="/">
              <FiHome className="sidebar-logo" />
              {"Home"}
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <AiOutlineLogin className="sidebar-logo" />
              {"Login "}
            </Link>
          </li>
        </ul>
      </div>
      {/* ============login============*/}
      <div className="login-content">
        <div className="login-form row">
          <div className="login-section col- col-sm-10 col-md-10  col-lg-4  col-xl-4  mx-5">
            <h2>logo</h2>
            <h4>Welcome</h4>
            <p>
              This application helps you in following up your work and providing
              a measure of efficiency and good performance for customers and
              following up on employees
            </p>
            <button>Sign Up</button>
          </div>

          <div className="signin-section col-12 col-sm-9 col-md-8  col-lg-4 col-xl-4 mt-3 mx-6">
            <h3>Sign In</h3>
            <div className="inputs">
              <label>Email</label>
              <input type="text" placeholder="Email"></input>
              <label>Password</label>
              <input type="text" placeholder="Password"></input>
            </div>
            <div className="forgetpassword">
              {"Forget Password? "}
              <Link to=""></Link>
            </div>
            <button className="Signin-btn">login</button>
            <div className="contact">
              <Link to="https://vsofteg.com">https://vsofteg.com</Link>
              <p>English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
