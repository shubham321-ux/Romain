import React from "react";
import "./css/Hikingcard.css";
import hikingsvg from "../assets/hikesvg.svg";

const HikingCard = ({
  image = hikingsvg,
  title = "Hiking",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type into electronic typesetting, remaining essentially unchanged."
}) => {
  return (
    <div className="hiking-card">
      <div className="hiking-card-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="heading2">{title}</h2>
      <p style={{textAlign:"start"}} className="para-normal">{description}</p>
    </div>
  );
};

export default HikingCard;
