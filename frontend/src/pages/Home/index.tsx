import * as React from "react";
import Information from '../../components/Infomation'
import FishList from '../../components/FishList'
import './style.css'

export default function Home() {
  return (
    <div className="page">
      <div className='concon'>
        <span className="fishList">Myfish List</span>
        <FishList img="미정" listName="연어" listExplain="설명"/>
      </div>
      <Information  numbering={3} name="연어" engName="鰱魚 | Salmon" explain="연어(鰱魚)는 연어속에 속하는 물고기이다. 치어는 강에서 태어나 바다로 가서 살다가 성체가 되면 다시 강을 거슬러 올라와 상류에서 알을 낳는 회유성 어종이다. 이 독특한 회유 습성으로 인해 생태계의 영양 셔틀 역할을 한다. 횟감이나 구이, 샐러드 요리 등으로 인기가 많은 생선이다"/>
      {/* <div className="box">
        <div className="imgBox"></div>
        <div className="numbering">NO.003</div>
        <div className="name">연어</div>
        <div className="engName">鰱魚 | Salmon</div>
        <div className="explain">연어(鰱魚)는 연어속에 속하는 물고기이다. 치어는 강에서 태어나 바다로 가서 살다가 성체가 되면 다시 강을 거슬러 올라와 상류에서 알을 낳는 회유성 어종이다. 이 독특한 회유 습성으로 인해 생태계의 영양 셔틀 역할을 한다. 횟감이나 구이, 샐러드 요리 등으로 인기가 많은 생선이다</div>
        <div className="infoBox">
          <span>123</span>
          <br></br>
          <span>123</span>
          <div className="infoline"></div>
          <span>123</span>
          <br></br>
          <span>123</span>
        </div>
      </div> */}
    </div>
  );
}