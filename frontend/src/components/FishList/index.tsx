import React from 'react'
import './style.css'
type FishListType = {
  apiData: {
    id:number;
    name:string;
    username:string;
    email:string;
    address:any;
  }
  fishClick(event:number):void;
};
function index({apiData,fishClick}:FishListType):React.ReactElement {
  const {id,name,username,email,address}=apiData
  return (
    <div>
        <div className="cell" onClick={()=>{fishClick(id)}}>
          <div className='Avatar'>
            <img className='Avatar_img' src="img/Logo.jpg" alt="이미지오류"></img>
          </div>
          <div className='FishList_Content'>
            <div className='This-is-a-title'>{name}</div>
            <div className='Subtitle-in-da-house'>{email}</div>
          </div>
        </div>
    </div>
  )
}

export default index