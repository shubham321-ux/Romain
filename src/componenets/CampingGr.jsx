import React from 'react'
import "./css/CampingGr.css";
import Title3 from './Title3';
import SVGcontainer from './SVGcontainer';
const CampingGr=()=>{
return(<>
<div className='campingGr-div'>
    <div className='campingGr-div-content'>
        <Title3 mainTitle='Camping Grounds' subTitle='Top Rated Packages' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type into electronic typesetting, remaining essentially unchanged.'/>
        <SVGcontainer/>
    </div>
</div>
</>)
}
export default CampingGr