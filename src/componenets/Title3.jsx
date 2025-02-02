import React from "react";
import "./css/Title3.css";

const Title3 = ({ 
  mainTitle = "About", 
  subTitle = "Top Rated Packages", 
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type into electronic typesetting, remaining essentially unchanged." 
}) => {
  return (
    <div className="title3-div">
      <div className="title3-div-heading-content">
        <h1 style={{
          fontFamily: "'Rock Salt', cursive",
        }} className="rock-heading head-add">
          {mainTitle}
        </h1>
        <h2  className="heading2 heading-add">  
          {subTitle}
        </h2>
      </div>
      <p className="para-normal para-add">{description}</p>
    </div>
  );
};

export default Title3;
