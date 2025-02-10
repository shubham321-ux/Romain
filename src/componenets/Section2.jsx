import React, { useState, useEffect } from "react";
import TitleDive from "./TitleDive";
import "./css/Section2.css";
import Card from "./Card";

const Section2 = ({ titleData, cards }) => {
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
        <TitleDive {...titleData} />
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            isReversed={index === 1 && windowWidth > 768}
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
