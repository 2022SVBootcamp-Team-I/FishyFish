import React from 'react'
import "./style.css";
import InfoBoxInner from "../InfoBoxInner"
type InformationType = {
  numbering: number;
  name: string;
  engName: string;
  explain: string;
};
function index({numbering,name,engName,explain}:InformationType) {
  return (
    <div className="box">
      <div className="grayBox">
        <img src="img/top.png" alt="이미지오류"></img>
        <div className="whiteBox">
          <div className='test'>
            <div className="imgBox"></div>
            <div className='commentBox'>
              <span className="numbering">NO.00{numbering}</span>
              <span className="name">{name}</span>
              <div className="explain">{explain}</div>
            </div>
          </div>
          <div className="infoBox">
          <InfoBoxInner content_1='Oncorhynchus' content_2='NameASIA' content_3='NintendoDs' title_1='Name' title_2='Hobby' title_3='From'/>
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