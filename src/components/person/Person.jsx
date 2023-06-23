import React from "react";
import "./about.css";

const Person = ({ name, job, about, image, percentage, products, text }) => {
  return (
    <div className="person-container">
      <div className="person-about">
        <div className="person-img-container">
          <img className="person-img" src={image} alt={name} />
        </div>

        <div className="person-details">
          <div className="person-name">{name}</div>
          <div className="person-job">{job}</div>
        </div>
      </div>
      <div className="person-details">
        <div className="person-description">{about}</div>
        <div className="person-percentage">{percentage}%</div>
        <div className="person-text">{text}</div>
        <div className="product-used">Product Used</div>
        <div className="person-products">
          {products.map((product, index) => (
            <div key={index} className="person-product">
              {product}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Person;
