import React, { useEffect, useState } from "react";
import "./css/Toprated.css";
import Title2 from "./Title2";
import Card from "./Card";
import tentSVG from "../assets/tentSVG.svg";
import fireSVG from "../assets/fireSVG.svg";
import wifiSVG from "../assets/wifiSVG.svg";
import sawerSvg from "../assets/sawerSVG.svg";
import cointainerSVG from "../assets/cointainerSVG.svg";
import toiletSVG from "../assets/toiletSVG.svg";
import freezerSVG from "../assets/freezerSVG.svg";
import tent from "../assets/tent.png";
import { MdArrowForward } from "react-icons/md";

const Toprated = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="toprated-div">
        <Title2 mainTitle="Packages" subTitle="Featured Activities" />

        <div className="toprated-div-content">
          <Card
            images={[tent, tent, tent]}
            autoSlideDelay={4000}
            title="Mountain View"
            rating="4.5"
            reviews="200"
            persons="2-4"
            area="30m2"
            isReversed={false}
            isColumn={true}
            attachments={[
              tentSVG,
              fireSVG,
              wifiSVG,
              cointainerSVG,
              toiletSVG,
              freezerSVG,
            ]}
            width100={"100%"}
          />
          <Card
            images={[tent, tent, tent]}
            autoSlideDelay={5000}
            title="Mountain View"
            rating="4.5"
            reviews="200"
            persons="2-4"
            area="30m2"
            isReversed={false}
            isColumn={true}
            attachments={[
              tentSVG,
              fireSVG,
              wifiSVG,
              cointainerSVG,
              toiletSVG,
              freezerSVG,
            ]}
            width100={"100%"}
          />
        </div>
        <div className="toprated-button">
          <button className="arrow-btn-div">
            <p className="arrow-btn-text">SEE MORE</p>
            <MdArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};
export default Toprated;
