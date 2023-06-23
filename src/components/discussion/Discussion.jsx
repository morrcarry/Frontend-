import React from "react";
import diss1 from "../../assets/diss1.png";
import diss2 from "../../assets/diss2.png";
import diss3 from "../../assets/diss3.png";
import "./discussion.css";

const Discussion = () => {
  return (
    <div className="discussion">
      <h1 className="discussion-heading-1">Expert Insights and Resources</h1>
      <p className="discussion-subheading-1">
        Get the latest business intelligence relevant to your industry, designed
        to help you grow.
      </p>
      <div className="discussion-1">
        <div className="discussion-item">
          <img src={diss1} alt="Discussion 1" className="discussion-image" />
          <h3 className="discussion-heading">
            Google My Business Basics: How to get more customers from GMB.
          </h3>
          <p className="discussion-subheading">
            Customers want to find local proprietors on search engines and
            nearly 90 percent of that traffic goes to Google.
          </p>
        </div>
        <div className="discussion-item">
          <img src={diss2} alt="Discussion 2" className="discussion-image" />
          <h3 className="discussion-heading">
            How to use Google's Business Messaging tool to get new customers
          </h3>
          <p className="discussion-subheading">
            Today’s leading businesses aren’t just being found - they’re
            engaging the moment they’re discovered.
          </p>
        </div>
        <div className="discussion-item">
          <img src={diss3} alt="Discussion 3" className="discussion-image" />
          <h3 className="discussion-heading">
            6 Ways to Increase Your Website Traffic and Leads
          </h3>
          <p className="discussion-subheading">
            More than 61% of marketers have reported that attracting traffic to
            their website is their biggest challenge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
