import * as React from "react";
import "./style.css";



const Navibar = () => {
    return (
            <div className="header">
                <img className="logo" src="img/Logo.jpg" alt="이미지오류"></img>
                <div className="header_nav">
                    <div className="fishlist">fishlist</div>
                    <div className="profile">profile</div>
                </div>
                <div className="line"></div>
            </div>
    );
  };
  
  export default Navibar;