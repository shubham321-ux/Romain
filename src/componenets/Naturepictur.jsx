import React from 'react'
import "./css/Naturepictur.css"
import TitleDive from './TitleDive'
import ImageTextGrid from './ImageTextGrid'

const Naturepictur = ({ titleData, gridData }) => {
  return (
    <div className='nature-pictur-main-div'>
      <TitleDive {...titleData} />
      <ImageTextGrid gridData={gridData} />
    </div>
  )
}

export default Naturepictur
