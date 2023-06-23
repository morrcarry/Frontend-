import React from "react";
import "./industry.css";

import ind1 from "../../assets/ind1.png";
import ind2 from "../../assets/ind2.png";
import ind3 from "../../assets/ind3.png";
import ind4 from "../../assets/ind4.png";
import ind5 from "../../assets/ind5.png";
import ind6 from "../../assets/ind6.png";
import ind7 from "../../assets/ind7.png";
import ind8 from "../../assets/ind8.png";
import ind9 from "../../assets/ind9.png";
import ind10 from "../../assets/ind10.png";
import ind11 from "../../assets/ind11.png";
import ind12 from "../../assets/ind12.png";

const Industry = () => {
  const industryImages = [
    { image: ind1, text: "Healthcare" },
    { image: ind2, text: "Dental" },
    { image: ind3, text: "Home Services" },
    { image: ind4, text: "Retail" },
    { image: ind5, text: "Hospitality" },
    { image: ind6, text: "Automotive" },
    { image: ind7, text: "Restaurants" },
    { image: ind8, text: "Wellness" },
    { image: ind9, text: "Professional Services" },
    { image: ind10, text: "Care Services" },
    { image: ind11, text: "Financial Services" },
    { image: ind12, text: "Recreational Services" },
  ];

  return (
    <div className="industry">
      <h2 className="industry-heading">
        SalesCaptain is designed for your business
      </h2>
      <h3 className="industry-subheading">
        Select your industry to see how it works
      </h3>
      <div className="industry-list">
        {industryImages.map((item, index) => (
          <div key={index} className="industry-item">
            <img src={item.image} alt={item.text} className="industry-img" />
            <p className="industry-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
