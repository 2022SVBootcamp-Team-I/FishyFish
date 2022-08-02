import * as React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { removeCookieToken } from "../../function/handleCookie";



const Navibar = () => {
    const onLogout = () => {
        removeCookieToken();
        window.location.href = "/";
    };

    return (
            <div className="header">
                <img className="logo" src="img/Logo.png" alt="이미지오류"></img>
                <div className="header_nav">
                    <div className="fishlist">{<Link to="/fishlist">fishlist</Link>}</div>
                    <div className="profile" onClick={onLogout}>{<Link to="/">logout</Link>}</div>
                </div>
            </div>
    );
  };
  
  export default Navibar;