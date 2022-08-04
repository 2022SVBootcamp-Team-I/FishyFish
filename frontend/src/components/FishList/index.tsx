import React from 'react'
import './style.css'
import CancelIcon from '@mui/icons-material/Cancel';
// onClick={()=>{fishClick(pk)}}
// onClick={(e)=>{e.stopPropagation(); fishDelete(pk)}}
type FishListType = {
  apiData:{
    url:string
    //id:0,1,2,3,4,5,6,7,8,9...
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
  const {url,fish}=apiData
  return (
    <div>
        <div className="cell" >
          <div className='Avatar'>
            <img className='Avatar_img' src={url} alt="이미지오류"></img>
          </div>
          <div className='FishList_Content'>
            <div className='This-is-a-title'>NO.00</div>
            <div className='Subtitle-in-da-house'>{fish.name}</div>
            <CancelIcon ></CancelIcon>
            
          </div>
        </div>
    </div>
  )
}

export default index