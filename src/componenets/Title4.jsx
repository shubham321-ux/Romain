import React from "react";
import "./css/Title4.css";
const Title4=({title,subTitle})=>{
return(<>
<div className="title4-main-div">
<h1 style={{
          fontFamily: "'Rock Salt', cursive",
          textAlign:"left",
          lineHeight:"1"
        }} className="rock-heading head-add">
         {title}
        </h1>
        <h2 style={{ textAlign:"left"}}
          className="heading2 heading-add">  
        {subTitle}
        </h2>
    </div>
</>)
}
export default Title4;