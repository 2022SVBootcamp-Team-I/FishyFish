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
        <div className="cell">1</div>
        <div className="cell2">2</div>
    </div>
  )
}

export default index