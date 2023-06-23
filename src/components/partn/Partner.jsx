import React from "react";
import partner1 from "../../assets/b1.png";
import partner2 from "../../assets/b2.png";
import partner3 from "../../assets/b3.png";
import partner4 from "../../assets/b4.png";
import partner5 from "../../assets/b5.png";
import partner6 from "../../assets/b6.png";
import partner7 from "../../assets/b7.png";
import "./partner.css";

const Partner = () => {
  const partnerImages = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
  ];

  return (
    <div className="partners">
      <h2 className="partners-heading">
        Trusted by 100,000+ local businesses globally
      </h2>
      <div className="partners-list">
        {partnerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Partner ${index + 1}`}
            className="partner-img"
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
