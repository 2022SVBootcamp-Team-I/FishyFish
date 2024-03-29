import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useTitle } from "../../hooks/useTitle";
import {onChange, onClick, UserLoginProps}  from "./LoginType";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../../redux/Auth/tokenSlice";
import { USER_LOGIN } from "../../redux/Login/loginSlice";
import { setAccessToken, setRefreshToken } from "../../function/handleCookie";
import HowToSlider from "../HowToSlider/HowToSlider";

export default function LoginForm() {
  const [userLoginData, setUserLoginData] = useState<UserLoginProps>({email: "", password: ""});
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const dispatch = useDispatch();

  const onChangeUserData = (event: onChange) => {
    setEmailValid(true);
    setPasswordValid(true);
    (event.target.id === "email") ? 
      setUserLoginData((prev) => prev = { email: event.target.value, password: prev.password }) 
    : 
      setUserLoginData((prev) => prev = { email: prev.email, password: event.target.value })
  }

  const resetInputForm = () => {
    setUserLoginData({email: "", password: ""});
  }

  const onLogin = (event: onClick) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/v1/login/", userLoginData)
    .then((res) => {
      setRefreshToken(res.data.token.refresh); // refresh 토큰 쿠키에 저장
      setAccessToken(res.data.token.access);
      dispatch(SET_TOKEN(res.data.token.access)); // access 토큰 state에 저장
      dispatch(USER_LOGIN({email: userLoginData.email}))
      resetInputForm();
      window.location.href = "/";
    })
    .catch((err) => {
      setEmailValid(false); 
      setPasswordValid(false);
      resetInputForm();
    });
  };

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Sign in"), 1000);
  
  return(
    <div className={styles.Login_11}>
      <div className={styles.aa_1}>
        <HowToSlider />
      </div>
      <div className={styles.Group_34}>
        <span className={styles.Sign_in}>Sign in</span>
        <span className={styles.If_you_dont_have_an_account_register}>If you don’t have an account register</span>
        <span className={styles.You_can_Register_here_}><span className={styles.text_style_1}>You can </span>{<Link to="/register">Register here !</Link>}</span>
      </div>
      <form className={styles.Group_38}>
        <span className={styles.Email}>Email</span>
        <span className={emailValid ? styles.email_validation_display_none : styles.email_validation}></span>
        <input id="email" value={userLoginData.email} className={emailValid ? styles.Enter_your_email_address : styles.If_email_invalid } placeholder="Enter your email" type="text" onChange={onChangeUserData} />
        <span className={emailValid ? styles.email_ballon_display_none : styles.email_ballon}>Check your email</span>
        <div className={styles.Rectangle_8}></div>

        <span className={styles.Password}>Password</span>
        <span className={passwordValid ? styles.password_validation_display_none : styles.password_validation}></span>
        <input id="password" value={userLoginData.password} className={passwordValid ? styles.Enter_your_Password : styles.If_password_invalid} placeholder="Enter your password" type="password" onChange={onChangeUserData} />
        <span className={passwordValid ? styles.password_validation_ballon_display_none : styles.password_validation_ballon}>Check your password</span>
        <div className={styles.Rectangle_9}></div>
        
        <button type="submit" onClick={onLogin} className={styles.btn_3d_red}>
          <span className={styles.Login}>Sign in</span>
        </button>
      </form>
    </div>
  );
}