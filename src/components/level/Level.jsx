import React from "react";
import LevelCard from "./LevelCard";
import "./level.css";

import att1 from "../../assets/att1.png";
import att2 from "../../assets/att2.png";
import att3 from "../../assets/att3.png";
import att4 from "../../assets/att4.png";
import eng1 from "../../assets/eng1.png";
import eng2 from "../../assets/eng2.png";
import eng3 from "../../assets/eng3.png";
import eng4 from "../../assets/eng4.png";

function Level() {
  const firstComponentData = [
    {
      heading: "Attract",
      subheading: "Attract more customers",
      items: [
        {
          title: "Reviews",
          description: "Improve ratings & get chosen more",
          image: att1,
        },
        {
          title: "Listings",
          description: "Improve listings & get seen more",
          image: att2,
        },
        {
          title: "Marketing",
          description: "Reach out to customers on text & email",
          image: att3,
        },
        {
          title: "SmartPages",
          description: "Engage more with our AI SEO",
          image: att4,
        },
      ],
    },
  ];

  const secondComponentData = [
    {
      heading: "Engage",
      subheading: "Convert leads to customers",
      items: [
        {
          title: "WebChat",
          description: "Convert leads on website chat with our AI",
          image: eng1,
        },
        {
          title: "Messaging",
          description: "Engage with customers across all channels",
          image: eng2,
        },
        {
          title: "Referrals",
          description: "Let your customers refer you",
          image: eng3,
        },
        {
          title: "Payments",
          description: "Modernize your integrated payment tools",
          image: eng4,
        },
      ],
    },
  ];

  const thirdComponentData = [
    {
      heading: "Elevate",
      subheading: "Provide a delightful experience",
      items: [
        {
          title: "Captain AI",
          description: "Your AI assistant to drive growth",
          image: eng1,
        },
        {
          title: "Feedback & survey",
          description: "Listen to your customers & delight them",
          image: eng2,
        },
        {
          title: "Competition & Insights",
          description: "Learn about your competitors & insights",
          image: eng3,
        },
        {
          title: "Customer Manager",
          description: "Manage all your customer data & activity",
          image: eng4,
        },
      ],
    },
  ];

  return (
    <div className="about-container">
      <div className="header">
        <h1>Tools to take your business to next level</h1>
      </div>

      <div className="people-container">
        {firstComponentData.map((data, index) => (
          <LevelCard
            key={index}
            heading={data.heading}
            subheading={data.subheading}
            items={data.items}
          />
        ))}

        {secondComponentData.map((data, index) => (
          <LevelCard
            key={index}
            heading={data.heading}
            subheading={data.subheading}
            items={data.items}
          />
        ))}

        {thirdComponentData.map((data, index) => (
          <LevelCard
            key={index}
            heading={data.heading}
            subheading={data.subheading}
            items={data.items}
          />
        ))}
      </div>
    </div>
  );
}

export default Level;
