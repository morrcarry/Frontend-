import React from "react";
import "./level.css";

const LevelCard = ({ heading, subheading, items }) => {
  return (
    <div className="custom-component">
      <div>
        <h2 className="component-heading">{heading}</h2>
        <h3 className="component-subheading">{subheading}</h3>
      </div>
      <div className="component-items">
        {items.map((item, index) => (
          <div key={index} className="component-item">
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="item-details">
              <h4 className="item-title">{item.title}</h4>
              <p className="item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelCard;
