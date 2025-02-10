import React from 'react'
import Title4 from './Title4'
import "./css/Hikingcard2.css"

const Hikingcard2 = ({ titleData, hikingData }) => {
  return (
    <div className='hiking-card2'>
      <Title4 
        title={titleData.title} 
        subTitle={titleData.subTitle}
      />
      <div className='hiking-card2-main-div1'>
        {hikingData?.length > 0 && hikingData.map((item) => (
          <div key={item.id} className='hiking-card2-main-div2'>
            <div style={{alignItems:"center"}} className='flex'>
              <img src={item.img} alt={item.title} />
              <h1 className='heading2'>{item.title}</h1>
            </div>
            <p style={{textAlign:"left"}} className='para-normal'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hikingcard2
