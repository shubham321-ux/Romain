import React from "react";
import "./css/SVGcontainer.css";
import vansvg from "../assets/vanSVG.svg";
import containSVG from "../assets/containSVG.svg";
import smtenetSVG from "../assets/smtent.svg";
import bigtenet from "../assets/bigtent.svg";
import homeSVG from "../assets/homeSVG.svg";
const SVGcontainer=()=>{
    const svgArray=[
        {
            name:"Campground",
            svg:bigtenet
        },
        {
            name:"Van",
            svg:vansvg
        },{
            name:"Tenet",
            svg:smtenetSVG
        },
        {
            name:"Container",
            svg:containSVG
        },
        {
            name:"Hut",
            svg:homeSVG
        }
    ]
return(<>
<div className="svg-div">
{
    svgArray.length>0 && svgArray.map((item,index)=>(
        <div key={index} className="svg-div-main-svg">
            <img src={item.svg} alt={item.name}/>
            <p className="svg-text">{item.name}</p>
        </div>
    ))
}
</div>
</>)
}
export default SVGcontainer