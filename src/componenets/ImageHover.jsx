import React from 'react';
import './css/ImageHover.css';

const ImageHover = ({ imageUrl }) => {
  return (
    <div className="image-hover-container">
      <img src={imageUrl} alt="hover effect" />
    </div>
  );
};

export default ImageHover;
