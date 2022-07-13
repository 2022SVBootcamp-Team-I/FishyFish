import React from 'react'
import './style.css'
type FishListType = {
  img: string;
  listName: string;
  listExplain: string;

};
function index({img,listName,listExplain}:FishListType) {
  return (
    <div>
        <div className="cell">
          <div className='Avatar'>
            <img className='Avatar_img' src="img/Logo.jpg" alt="이미지오류"></img>
          </div>
          <div className='FishList_Content'>
            <div className='This-is-a-title'>연어</div>
            <div className='Subtitle-in-da-house'>2118 Thornridge Cir. Syracuse, Connecticut 35624</div>
          </div>
        </div>

        <div className="cell2">
          <div className='Avatar'></div>
          <div className='FishList_Content'>
            <div className='This-is-a-title'>연어</div>
            <div className='Subtitle-in-da-house'>2118 Thornridge Cir. Syracuse, Connecticut 35624</div>
          </div>
        </div>
    </div>
  )
}

export default index