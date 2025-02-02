import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cssVar } from "./CssVar";
import "./css/ImageFilledText.css";

const ImageFilledText = ({
  text,
  secondText,
  fontSize,
  secondFontSize,
  backgroundImage,
  secondFont,
  secondColor,
  width1,
}) => {
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

  const commonStyles = {
    textAlign: "center",
    padding: "0px",
    margin: 0,
    BsTextWrap: "wrap",
    paddingTop: "10px",
  };

  const textStyle1 = {
    ...commonStyles,
    fontWeight: "100",
    fontSize: windowWidth <= 768 ? "120px" : fontSize || "64px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: windowWidth <= 768 ? "100%" : width1 || "700px",
    lineHeight: "0.8",
  };

  const textStyle2 = {
    ...commonStyles,
    fontWeight: "400",
    fontFamily: "'Rock Salt', cursive",
    fontSize: windowWidth <= 768 ? "30px" : secondFontSize || "48px",
    color: secondColor || cssVar.colors.orange,
    lineHeight: "1.3",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    alignItems: "center",
    width: "100%",
  };

  const animationConfig = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      damping: 20,
      stiffness: 80,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  };

  return (
    <div style={containerStyle}>
      <motion.h1
        className="text-primary"
        style={textStyle1}
        {...animationConfig}
      >
        {text}
      </motion.h1>
      <motion.h1
        style={textStyle2}
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        transition={{
          ...animationConfig.transition,
          delay: 0.4,
        }}
      >
        {secondText || text}
      </motion.h1>
    </div>
  );
};

export default ImageFilledText;
