import React from 'react'
import "./style.css";
type InformationType = {
  numbering: number;
  name: string;
  engName: string;
  explain: string;

};
function index({numbering,name,engName,explain}:InformationType) {
  return (
    <div className="box">
        <div className="imgBox"></div>
        <div className="numbering">NO.00{numbering}</div>
        <div className="name">{name}</div>
        <div className="engName">{engName}</div>
        <div className="explain">{explain}</div>
        <div className="infoBox">
          <span>123</span>
          <br></br>
          <span>123</span>
          <div className="infoline"></div>
          <span>123</span>
          <br></br>
          <span>123</span>
        </div>
    </div>
  )
}

export default index