import React from 'react'
import "./style.css";
type InfoBoxInnerType = {
  title_1:string;
  title_2:string;
  title_3:string;
  content_1:string;
  content_2:string;
  content_3:boolean;
};
function index({title_1,title_2,title_3,content_1,content_2,content_3}:InfoBoxInnerType) {
  return (
    <div>
        <div className='infoBox_title'>
            <div>{title_1}</div>
            <div>{title_2}</div>
            <div>{title_3}</div>
        </div>
        <div className='infoBox_Content'>
            <span className='content_1'>{content_1}</span>
            <span className='content_2'>{content_2}</span>
            <span className='content_3'>{{content_3}?<div>Safe</div>:<div>Harmful</div>}</span>
        </div>
    </div>
  )
}

export default index