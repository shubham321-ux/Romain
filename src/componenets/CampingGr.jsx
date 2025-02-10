import React from 'react'
import "./css/CampingGr.css";
import Title3 from './Title3';
import SVGcontainer from './SVGcontainer';

const CampingGr = ({ titleData }) => {
  return (
    <div className='campingGr-div'>
      <div className='campingGr-div-content'>
        <Title3 {...titleData} />
        <SVGcontainer />
      </div>
    </div>
  );
}

export default CampingGr;
