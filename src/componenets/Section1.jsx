import React from "react";
import "./css/Section1.css";
import ImageFilledText from "./ImageFilledText";
import mountain from "../assets/mouintaion.jpeg";
import mountman from "../assets/mountman.png";
import parasuit from "../assets/parasuit.png";
import { motion } from "framer-motion";

const Section1 = () => {
  const parasuitAnimation = {
    initial: {
      x: 400,
      y: -300,
      rotate: -45,
      scale: 0.8
    },
    animate: {
      x: 0,
      y: 0,
      rotate: 10,
      scale: 1,
      transition: {
        duration: 2.5,
        ease: [0.25, 0.1, 0.25, 1],
        damping: 15,


      }
    }
  };

  const mountmanAnimation = {
    animate: {
      skew: [-10, 2],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }
    }
  };
  

  return (
    <>
      <div className="section1-div">
        <div className="section1-div-2">
          <ImageFilledText
            text="ROA MIN"
            fontSize="200px"
            secondFontSize="48px"
            backgroundImage={mountain}
            secondText="TRIBE"
          />
          <motion.div 
            className="mountman-svg"
            animate={mountmanAnimation.animate}
            style={{ transformOrigin: "top center" }}
          >
            <img src={mountman} alt="mountain man"/>
          </motion.div>
          <motion.div 
            className="parasuit-svg"
            initial={parasuitAnimation.initial}
            animate={parasuitAnimation.animate}
            whileHover={{ scale: 1.05 }}
          >
            <img src={parasuit} alt="parasuit"/>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Section1;
