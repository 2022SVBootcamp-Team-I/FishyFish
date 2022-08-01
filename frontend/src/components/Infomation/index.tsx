import React from 'react'
import "./style.css";
import InfoBoxInner from "../InfoBoxInner"
type InformationType = {
  apiData: {
    id:number;
    name:string;
    username:string;
    email:string;
    address:any;
  }
};
function index({apiData}:InformationType) {
  const {id,name,username,email,address}=apiData
  return (
    <div className="box">
      <div className="grayBox">
        <img src="img/top.png" alt="이미지오류"></img>
        <div className="whiteBox">
          <div className='test'>
            <div className="imgBox"></div>
            <div className='commentBox'>
              <div className="numbering">NO.00{id}</div>
              <div className="name">{name}</div>
              <div className="explain">{email}</div>
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