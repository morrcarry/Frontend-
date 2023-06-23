import React from "react";
import Person from "./Person";
import "./about.css";

import person1 from "../../assets/p1.png";
import person2 from "../../assets/p2.png";
import person3 from "../../assets/p3.png";

const About = () => {
  const people = [
    {
      name: "Simon Page",
      job: "Owner, Mamagato Restaurant",
      about:
        "In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn",
      image: person1,
      percentage: 40,
      text: "Average net profit increase",
      products: ["Messaging", "Webchat", "Reviews", "Listings", "Referrals"],
    },
    {
      name: "Daniel Wilson",
      job: '"Marketing head, The Air Conditioning Company"',
      about:
        "Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google",
      image: person2,
      percentage: 200,
      text: "New review growth",
      products: [
        "Reviews",
        "Listings",
        "Messaging",
        "Webchat",
        "Customer Manager",
      ],
    },
    {
      name: "Debbie Rose",
      job: "Owner, Jiva luxury Spa      ",
      about:
        "Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks",
      image: person3,
      percentage: 95,
      text: "Generated with marketing campaign",
      products: [
        "Marketing",

        "Webchat",
        "Reviews",
        "Messaging",
        "Competition & Insights",
      ],
    },
  ];

  return (
    <div className="about-container">
      <div className="people-container">
        {people.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            job={person.job}
            about={person.about}
            image={person.image}
            percentage={person.percentage}
            text={person.text}
            products={person.products}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
