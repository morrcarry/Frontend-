import React from "react";
import loginImage from "../../assets/login.png";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <img src={loginImage} alt="Login" className="login-image" />
        <h2 className="login-heading">Login</h2>
        <form>
          <input type="email" placeholder="Email" className="login-input" />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button className="login-button">
            <Link to="/"> Sign In</Link>
          </button>
          <p className="forgot-password">Forgot Password?</p>
        </form>
      </div>
      <div className="login-image-container">
        <div className="white-box">
          <h3 className="white-box-heading">
            Give your business a SalesCaptain Upgrade
          </h3>
          <p className="white-box-para">
            Our AI-powered tools help local businesses modernize how they
            communicate with their customers by facilitating online reviews,
            personalized marketing campaigns, web chats, payments, and more.
          </p>
          <p className="white-box-para">
            To learn more, talk to an expert today.
          </p>
          <button className="book-appointment-button">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
