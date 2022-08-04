import * as React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { removeCookieAccessToken, removeCookieRefreshToken } from "../../function/handleCookie";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TOKEN } from "../../redux/Auth/tokenSlice";
import axios from "axios";
import { USER_LOGOUT } from "../../redux/Login/loginSlice";
import { RootState } from "../../redux/store";

const Navibar = () => {
    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.persistedReducer.loginSlice.email);

    const onLogout = () => {
        dispatch(DELETE_TOKEN());
        dispatch(USER_LOGOUT());
        removeCookieRefreshToken();
        removeCookieAccessToken();
        axios.post("http://localhost:8000/api/v1/logout/" , {email: email}).catch(err => console.log(err));
        window.location.href = "/";
    };

    return (
            <div className="header">
                <img className="logo" src="img/Logo.png" alt="이미지오류"></img>
                <div className="header_nav">
                <div className="upload">{<Link to="/upload">Upload</Link>}</div>
                    <div className="fishlist">{<Link to="/fishlist">FishList</Link>}</div>
                    <div className="profile" onClick={onLogout}>{<Link to="/">Logout</Link>}</div>
                </div>
            </div>
    );
  };
  
  export default Navibar;