import React from 'react'
import "./style.css";
import InfoBoxInner from "../InfoBoxInner"
type InformationType_2 = {
    url:string
    name:string
    toxicity:boolean;
    prohibit_period:string;
    prohibit_area:string;
    description:string;
  
  };
function index({url,name,toxicity,prohibit_period,prohibit_area,description}:InformationType_2) {
  return (
    <div className="box">
      <div className="grayBox">
        <img src="img/top.png" alt="이미지오류"></img>
        <div className="whiteBox">
          <div className='test'>
            <div className="imgBox"><img className='imgBox_img' src={url} alt="오류"/></div>
            <div className='commentBox'>
              <div className="numbering">NO.???</div>
              <div className="name">{name}</div>
              <div className="explain">{description}</div>
            </div>
          </div>
          <div className="infoBox">
          <InfoBoxInner content_1={prohibit_period} content_2={prohibit_area} content_3={toxicity} title_1='Period' title_2='Area' title_3='Toxicity'/>
          </div>
        </div>
        <img src="img/under.png" alt="이미지오류"></img>
      </div>
      <div className='controller'>
        <div><img src="img/crossButton.png" alt="이미지오류"></img></div>
        <div><img src="img/button23.png" alt="이미지오류"></img></div>
      </div>
      <div><img src="img/Group 61.png" alt="이미지오류"></img></div>
    </div>
  )
}

export default index