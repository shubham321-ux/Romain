import React from "react";
import "./css/Title2.css";

const Title2 = ({ 
  mainTitle = "Packages", 
  subTitle = "Top Rated Packages" ,
  endless=false
}) => {
  return (
    <div className="title2-div">
      <div  style={{justifyContent:endless && "start"}}className="title2-div-content">
        <h1 style={{
          textAlign: "right",
          fontFamily: "'Rock Salt', cursive",
          lineHeight: 1
        }} className="rock-heading">
          {mainTitle}
        </h1>
        <h2 style={{
          textAlign: "right"
        }} className="heading2 add-head">
          {subTitle}
        </h2>
      </div>
    </div>
  );
};

export default Title2;
