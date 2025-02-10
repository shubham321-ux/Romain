import React from 'react';
import './css/ImageTextGrid.css';

const ImageTextGrid = ({gridData}) => {
  const groupedData = [];
  for (let i = 0; i < gridData.length; i += 3) {
    groupedData.push(gridData.slice(i, i + 3));
  }

  return (
    <div className='image-show-div'>
    <div className="horizontal-scroll-container">
      <div className="scroll-content">
        {groupedData.map((group, groupIndex) => (
          <div className="content-group" key={groupIndex}>
            <div className="image-section">
              <div
                className="image-cell"
                style={{ backgroundImage: `url(${group[0]?.image})` }}
              >
                <div className="overlay">
                  <h2>{group[0]?.name}</h2>
                  <p>{group[0]?.description}</p>
                </div>
              </div>
            </div>
            <div className="text-section">
              {group.slice(1, 3).map((item, index) => (
                item && (
                  <div
                    className="text-cell"
                    key={index}
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="overlay">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageTextGrid;
