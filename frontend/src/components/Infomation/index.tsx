import React from 'react'
import "./style.css";
import InfoBoxInner from "../InfoBoxInner"
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
          <InfoBoxInner content_1='Oncorhynchus keta' content_2='연어목' content_3='약70cm' title_1='학명' title_2='목' title_3='몸길이'/>
          <div className="infoBox_Line"></div>
          <InfoBoxInner content_1='Oncorhynchus keta' content_2='연어목' content_3='약70cm' title_1='학명' title_2='목' title_3='몸길이'/>
        </div>
    </div>
  )
}

export default index