import React from "react";
import "./css/Instagram.css"
import Title4 from "./Title4";
import GrowingImageGrid from "./GrowingImageGrid";

const Instagram = ({ titleData, images }) => {
  return (
    <div className="instagram-main-div">
      <Title4 
        title={titleData.title} 
        subTitle={titleData.subTitle}
      />
      <GrowingImageGrid images={images} />
    </div>
  )
}

export default Instagram;
