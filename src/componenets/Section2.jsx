import React, { useState, useEffect } from "react";
import TitleDive from "./TitleDive";
import "./css/Section2.css";
import Card from "./Card";
import tentSVG from "../assets/tentSVG.svg";
import fireSVG from "../assets/fireSVG.svg";
import wifiSVG from "../assets/wifiSVG.svg";
import sawerSvg from "../assets/sawerSVG.svg";
import cointainerSVG from "../assets/cointainerSVG.svg";
import toiletSVG from "../assets/toiletSVG.svg";
import freezerSVG from "../assets/freezerSVG.svg";
import tent from "../assets/tent.png";

const Section2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main-section2-div">
      <div className="section2-div">
        <TitleDive
          style={false}
          title="Book"
          subtitle="Book Your Dream Vacation now"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type into electronic typesetting, remaining essentially unchanged."
        />
        <Card
          images={[tent, tent, tent]}
          autoSlideDelay={4000}
          title="Shimla"
          rating="4.5"
          reviews="200"
          persons="2-4"
          area="30m2"
          isReversed={false}
          isColumn={false}
          attachments={[tentSVG, fireSVG, fireSVG, wifiSVG, cointainerSVG, toiletSVG]}
        />
        <Card
          images={[tent, tent, tent]}
          autoSlideDelay={5000}
          title="Mountain View"
          rating="4.5"
          reviews="200"
          persons="2-4"
          area="30m2"
          isReversed={windowWidth > 768}
          isColumn={false}
          attachments={[tentSVG, fireSVG, wifiSVG, cointainerSVG, toiletSVG, freezerSVG]}
        />
      </div>
    </div>
  );
};

export default Section2;
