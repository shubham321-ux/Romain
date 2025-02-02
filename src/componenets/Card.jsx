import React, { useState, useEffect } from "react";
import "./css/Card.css";
import tent from "../assets/tent.png";
import { motion, AnimatePresence } from "framer-motion";
import star from "../assets/star.svg";
import Smallline from "./Smallline";
import { MdArrowForward } from "react-icons/md";

const Card = ({ 
  images = [tent],
  title = "Shimla",
  rating = "4.2",
  reviews = "170", 
  persons = "1-6",
  area = "25m2",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  currentPrice = "USD 521.68",
  previousPrice = "$99.99",
  savings = "USD 336.22",
  attachments = [],
  autoSlideDelay = 3000,
  isReversed = false,
  isColumn = false,
  width100 = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  useEffect(() => {
    const timer = setInterval(nextImage, autoSlideDelay);
    return () => clearInterval(timer);
  }, [currentIndex, autoSlideDelay]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDragStart = (e) => {
    setDragStart(e.clientX);
  };

  const handleDragEnd = (e) => {
    const dragEnd = e.clientX;
    const difference = dragStart - dragEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

  const CarouselComponent = () => (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsFullScreen(true)}
            className="main-image"
          />
        </AnimatePresence>

        <motion.img
          src={images[(currentIndex + 1) % images.length]}
          className="preview-image"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.3 }}
        />
      </motion.div>

      <div className="navigation-dots">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );

  const InfoComponent = () => (
    <div className="rating-and-date-div">
      <div className="rating-div">
        <h1 className="heading3">{title}</h1>
        <div className="rate">
          <img src={star} alt="star" />
          <p className="rateText">{rating}</p>
          <p className="braket-text">{reviews}</p>
        </div>
      </div>
      <div className="date-div">
        <p className="date-text">{persons}</p>
        <Smallline />
        <p className="date-text">{area}</p>
      </div>
    </div>
  );

  const PriceComponent = () => (
    <div className="ticket-price-div">
      <div className="ticket-price-div1">
        <h2 className="tent-price">{currentPrice}</h2>
        <del className="previous-price">{previousPrice}</del>
        <div className="container-edge">
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="25" viewBox="0 0 5 25" fill="none">
            <path d="M4.00671 3.5L0.966797 6.5L4.00671 9.5L0.966797 12.5L4.00671 15.5L0.966797 18.5L4.00671 21.5L0.966797 24.5H4.9668V0.5H0.966797L4.00671 3.5Z" fill="#E5F1E8"/>
          </svg>
          <div className="ticket-containetr">
            <h2 className="ticket-text-heading">SAVE</h2>
            <p className="ticket-text-heading">{savings}</p>
          </div>
          <div className="ticket-last-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="25" viewBox="0 0 5 25" fill="none">
              <path d="M1.92689 3.5L4.9668 6.5L1.92689 9.5L4.9668 12.5L1.92689 15.5L4.9668 18.5L1.92689 21.5L4.9668 24.5H0.966797V0.5H4.9668L1.92689 3.5Z" fill="#E5F1E8"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="multisvg-countainer">
        <div className="svg-div">
          {attachments.map((item, index) => (
            <div key={index} className="svg-div-main">
              <img src={item} alt="attachment" />
            </div>
          ))}
        </div>
        <button className="arrow-btn-div">
          <p className="arrow-btn-text">SEE ALL PACKAGES</p>
          <MdArrowForward />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className={`card-div ${isColumn ? 'column-layout' : ''}`}>
        {isReversed ? (
          <>
            <div className="card-div2">
              <InfoComponent />
              <p style={{textAlign:"left"}} className="para-normal">{description}</p>
              <PriceComponent />
            </div>
            <div style={{width:width100 && "100%"}} className="card-div1">
              <CarouselComponent />
            </div>
          </>
        ) : (
          <>
            <div style={{width:width100 && "100%"}} className="card-div1">
              <CarouselComponent />
            </div>
            <div className="card-div2">
              <InfoComponent />
              <p style={{textAlign:"left"}} className="para-normal">{description}</p>
              <PriceComponent />
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close-btn" onClick={() => setIsFullScreen(false)}>×</button>
            <button className="nav-btn prev" onClick={prevImage}>‹</button>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <button className="nav-btn next" onClick={nextImage}>›</button>
            <div className="navigation-dots">
              {images.map((_, index) => (
                <motion.div
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
