import React from 'react'
import './style.css'
import CancelIcon from '@mui/icons-material/Cancel';
// 
//
type FishListType = {
  apiData:{
    url:string
    id:number
    fish: {
      name:string
      toxicity:boolean;
      prohibit_period:string;
      prohibit_area:string;
      description:string;
    }
  }
  fishClick(event:number):void;
  fishDelete(evnet:number):void;
};
function index({apiData,fishClick,fishDelete}:FishListType):React.ReactElement {
  const {url,id,fish}=apiData
  return (
    <div>
        <div className="cell" onClick={()=>{fishClick(id)}} >
          <div className='Avatar'>
            <img className='Avatar_img' src={url} alt="이미지오류"></img>
          </div>
          <div className='FishList_Content'>
            <div className='This-is-a-title'>NO.00</div>
            <div className='Subtitle-in-da-house'>{fish.name}</div>
            <CancelIcon  onClick={(e)=>{e.stopPropagation(); fishDelete(id)}} ></CancelIcon>
            
          </div>
        </div>
    </div>
  )
}

export default index