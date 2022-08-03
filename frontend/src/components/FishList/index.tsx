import React from 'react'
import './style.css'
import CancelIcon from '@mui/icons-material/Cancel';
type FishListType = {
  apiData:{
    model:string,
    pk:number
    fields: {
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
  const {model,pk,fields}=apiData
  return (
    <div>
        <div className="cell" onClick={()=>{fishClick(pk)}}>
          <div className='Avatar'>
            <img className='Avatar_img' src="img/Logo.jpg" alt="이미지오류"></img>
          </div>
          <div className='FishList_Content'>
            <div className='This-is-a-title'>NO.00{pk}</div>
            <div className='Subtitle-in-da-house'>{fields.name}</div>
            <CancelIcon onClick={(e)=>{e.stopPropagation(); fishDelete(pk)}}></CancelIcon>
            
          </div>
        </div>
    </div>
  )
}

export default index