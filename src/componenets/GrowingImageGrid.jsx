import React from 'react';
import './css/GrowingImageGrid.css';

const GrowingImageGrid = ({ images }) => {
  const getItemClass = (index) => {
    const position = index % 3;
    switch (position) {
      case 0:
        return 'small-item';
      case 1:
        return 'medium-item';
      case 2:
        return 'large-item';
      default:
        return 'small-item';
    }
  };

  return (
    <div className="growing-grid-container">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`grid-item ${getItemClass(index)}`}
        >
          <img src={image} alt={`Item ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default GrowingImageGrid;
