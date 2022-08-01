import React from 'react'
import "./style.css";
import InfoBoxInner from "../InfoBoxInner"
function index() {
  return (
    <div className="box">
      <div className="grayBox">
        <img src="img/top.png" alt="이미지오류"></img>
        <div className="whiteBox">
          <div className='test'>
            <div className="imgBox"></div>
            <div className='commentBox'>
              <div className="numbering"></div>
              <div className="name"></div>
              <div className="explain"></div>
            </div>
          </div>
          <div className="infoBox">
          <InfoBoxInner content_1='' content_2='' content_3='' title_1='' title_2='' title_3=''/>
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