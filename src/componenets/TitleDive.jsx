import React from 'react';
import "./css/TitleDSive.css";

const TitleDive = ({ 
  style, 
  title, 
  subtitle, 
  description 
}) => {
  return (
    <div 
      className='title-main-div'
      style={{
        display: "flex", 
        justifyContent: style ? "space-between" : "end"
      }}
    >
      <div className='title-div1'>
        <h1 style={{fontFamily: "'Rock Salt', cursive",lineHeight:"1",textAlign:"left"}} className='title-h1'>{title}</h1>
        <h2  className='heading2 chanInH2'>{subtitle}</h2>
      </div>
      <div className='title-div2'>
        <p style={{textAlign:"right"}} className='para-normal'>{description}</p>
      </div>
    </div>
  );
};

export default TitleDive;
