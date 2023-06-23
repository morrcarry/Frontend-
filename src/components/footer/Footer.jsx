import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-darkgrey">
        <h3 className="footer-heading">Ready to grow?</h3>
        <p className="footer-para">
          See why 100,000+ businesses trust us. Book a personalized demo to see
          how SalesCaptain provides you the right tools to grow your business.
        </p>
        <div>
          <form className="footer-email">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <button className="footer-button">Get Demo</button>
          </form>
        </div>

        <div className="footer-image">
          <div>
            <h3 className="star-rating">⭐⭐⭐⭐</h3>
          </div>
          <div>
            <span className="footer-icon-text">500+ Reviews</span>
          </div>
        </div>
        <div className="footer-images">
          <div className="footer-image-item">Google</div>
          <div className="footer-image-item">Capterra</div>
          <div className="footer-image-item">Software Advice</div>
        </div>
      </div>

      <div className="footer-black">
        <div className="header">
          <h1>SalesCaptain</h1>
        </div>
        <div className="footer-content">
          <div>
            <h1 className="footer-heading-black">Products</h1>
            <ul className="footer-subheading-list">
              <li>Reviews</li>
              <li>Listings</li>
              <li>Marketing</li>
              <li>WebBoost</li>
              <li>Referrals</li>
              <li>Payments</li>
              <li>WebChats</li>
              <li>Messaging</li>
              <li>Captain AI</li>
              <li>Feedback & Survey</li>
              <li>Competitions & Insights</li>
              <li>Customer Manager</li>
            </ul>
          </div>
          <div>
            <h1 className="footer-heading-black">Industry</h1>
            <ul className="footer-subheading-list">
              <li>Healthcare</li>
              <li>Dental</li>
              <li>Home Services</li>
              <li>Retail</li>
              <li>Hospitality</li>
              <li>Automotive</li>
              <li>Restaurants</li>
              <li>Wellness</li>
              <li>Professional Services</li>
            </ul>
          </div>
          <div>
            <h1 className="footer-heading-black">Company</h1>
            <ul className="footer-subheading-list">
              <li>Contact</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className="footer-offices">
            <div>
              <h3 className="footer-heading-office">US Headquarters</h3>
              <p>447 Broadway, 2nd Floor,</p>
              <p>New York 10013</p>
            </div>

            <div>
              <h3 className="footer-heading-office">India Office</h3>
              <p>1467 Janani HSR Layout Bengaluru</p>
              <p>Karnataka 560102</p>
            </div>

            <div>
              <h3 className="footer-heading-office">London Office</h3>
              <p>79 - 81 Borough Rd</p>
              <p>London England 400706</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
