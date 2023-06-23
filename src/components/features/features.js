// eslint-disable-next-line
import React from "react";
import "./features.css";
import stand1 from "../../assets/stand1.png";
import stand2 from "../../assets/stand2.png";
import stand3 from "../../assets/stand3.png";
import stand4 from "../../assets/stand4.png";

const Features = () => {
  return (
    <div className="features">
      <div className="header-1">
        <h1>Make your business stand out with us</h1>
      </div>

      <div className="feature-item">
        <div className="feature-content-1">
          <img src={stand1} alt="Feature 1" className="feature-image" />
          <div>
            <h3 className="feature-header">Get discovered by more customers</h3>
            <p className="feature-subheader">
              Higher reviews & better listings make you more discoverable to
              people organically
            </p>
            <button className="feature-button">Get Started</button>
          </div>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
          <img src={stand2} alt="Feature 2" className="feature-image" />
          <div>
            <h3 className="feature-header">
              Faster conversion with our Captain AI
            </h3>
            <p className="feature-subheader">
              Automate web chat, messaging, reviews & feedbacks with our AI
              assistant
            </p>
            <button className="feature-button">Get Started</button>
          </div>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content-1">
          <img src={stand3} alt="Feature 3" className="feature-image" />
          <div>
            <h3 className="feature-header">Marketing that works for you</h3>
            <p className="feature-subheader">
              Run highly effective & targeted campaigns on text & emails and put
              your customer data to use
            </p>
            <button className="feature-button">Get Started</button>
          </div>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
          <img src={stand4} alt="Feature 4" className="feature-image" />
          <div>
            <h3 className="feature-header">Training & Support</h3>
            <p className="feature-subheader">
              Run highly effective & targeted campaigns on text & emails and put
              your customer data to use
            </p>
            <button className="feature-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
