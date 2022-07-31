import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useTitle } from "../../hooks/useTitle";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {useDispatch} from "react-redux";
import {userLogin} from "../../redux/Login/loginSlice";
import {onChange, onClick, UserLoginProps}  from "./LoginType";
import Media from 'react-media';
import axios from "axios";

export default function LoginForm() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const dispatch = useDispatch();
  const [userLoginData, setUserLoginData] = useState<UserLoginProps>({email: "", password: ""});
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const onChangeUserData = (event: onChange) => {
    setEmailValid(true);
    setPasswordValid(true);
    (event.target.id === "email") ? 
      setUserLoginData((prev) => {
        const newObj = { 
          email: event.target.value,
          password: prev.password
        }
        return prev = newObj;
      }) 
    : 
      setUserLoginData((prev) => {
        const newObj = {
          email: prev.email,
          password: event.target.value
        }
        return prev = newObj;
      })
  }
  const resetInputForm = () => {
    setUserLoginData({email: "", password: ""});
  }
  const onLogin = (event: onClick) => {
    event.preventDefault();
    if (userLoginData.email === "") {
      setEmailValid(false); 
      resetInputForm();
    } 
    if (userLoginData.password === "") {
      setPasswordValid(false); 
      resetInputForm();
    }

    axios.post("http://localhost:8000/api/v1/login/", userLoginData).catch((err) => console.log(err));
    if (false) {
      console.log(`email : ${userLoginData.email}`, `password : ${userLoginData.password}`);
      sessionStorage.setItem("login", JSON.stringify(userLoginData));
      dispatch(userLogin(userLoginData));
      resetInputForm();
      // window.location.href = "/upload";
    } 
    // else {
    //   alert("아이디 혹은 비밀번호가 틀렸습니다.")
    //   resetInputForm();
    //   return;
    // }
  };

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Sign in"), 1000);
  
  return(
    <div className={styles.Login_11}>
      <div className={styles.aa_1}>
        <Media query="(max-width: 420px)">
          {matches => 
              matches ? (
                <AutoplaySlider fillParent={true} bullets={false} buttons={true} play={true} interval={3000}>
                  <div className={styles.aa_1_image} data-src="/img/testing1.jpg"></div>
                  <div className={styles.aa_1_image} data-src="/img/testing2.jpg"></div>
                  <div className={styles.aa_1_image} data-src="/img/testing3.jpg"></div>
                </AutoplaySlider>
              ) :
                <AutoplaySlider fillParent={true} bullets={false} buttons={true} play={true} interval={3000}>
                  <div className={styles.aa_1_image} data-src="/img/testing1.jpg"></div>
                  <div className={styles.aa_1_image} data-src="/img/testing2.jpg"></div>
                  <div className={styles.aa_1_image} data-src="/img/testing3.jpg"></div>
                </AutoplaySlider>
          }
        </Media>
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