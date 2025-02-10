import React from "react";
import "./css/SocialCards.css";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(parseFloat(rating));

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < filledStars ? 'filled' : ''}`}
        >
          ★
        </span>
      ))}
      <span className="rating-number">{rating}</span>
    </div>
  );
};

const SocialCards = ({ socialData }) => {
  return (
    <div className="social-cards-main-div">
      <div className="social-cards-main-div1">
        {socialData?.length > 0 && socialData.map((item, index) => (
          <div
            className="social-data-card"
            key={index}
          >
            <div className="rating-star-div">
              <StarRating rating={item.rating} />
            </div>
            <p style={{textAlign:"left"}} className="para-normal">{item.comment}</p>
            <div className="social-pic-name-from">
              <img src={item.pic} alt={item.name} />
              <div className="social-name-from">
                <h4>{item.name}</h4>
                <p>{item.from}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialCards;
