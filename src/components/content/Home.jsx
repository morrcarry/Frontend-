import React from "react";
import people from "../../assets/people.png";
import "./home.css";

const Home = () => {
  return (
    <div className="content">
      <div className="content-text">
        <h1 className="content-heading">
          Best way to grow your local business
        </h1>
        <h3 className="content-bold-text">
          Artificial Intelligence powered easy-to-use tools to get more
          customers & give them a better experience
        </h3>
        <form className="content-form">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <button type="submit" className="content-demo-button">
            Get Demo
          </button>
        </form>
      </div>
      <div className="content-image">
        <img src={people} alt="people" />
      </div>
    </div>
  );
};

export default Home;
