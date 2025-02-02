import React from "react";
import "./css/HikingDiv.css";
import Title2 from "./Title2";
import map from "../assets/map.png";
import hikingsvg from "../assets/hikesvg.svg";
import HikingCard from "./HikingCard";

const HikingDiv = () => {
  const hikingData = [
    {
      image: hikingsvg,
      title: "Hiking",
      description: "Experience the thrill of mountain hiking with our expert guides."
    },
    {
      image: hikingsvg,
      title: "Camping",
      description: "Set up camp under the stars and enjoy the wilderness experience."
    },
    {
      image: hikingsvg,
      title: "Trekking",
      description: "Explore challenging trails and discover hidden natural wonders."
    },
    {
      image: hikingsvg,
      title: "Adventure",
      description: "Join us for exciting outdoor adventures and memorable experiences."
    }
  ];

  return (
    <div className="hiking-div">
      <div className="hiking-div-heading-div">
        <div className="hiking-div-heading">
          <Title2
            mainTitle="Activities"
            subTitle="Change the way you travel, be closerto nature. Take a second to appreciateevery beauty"
            endless={true}
          />
        </div>
        <div className="hiking-div-image">
          <img src={map} alt="map" />
        </div>
      </div>
      <div className="hiking-div-content">
        <div className="hikeCrads-div">
          {hikingData.map((item, index) => (
            <HikingCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HikingDiv;
