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

export default function LoginForm() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const dispatch = useDispatch();
  const [userLoginData, setUserLoginData] = useState<UserLoginProps>({username: "", password: ""});

  const onChangeUserData = (event: onChange) => {
    (event.target.id === "username") ? 
      setUserLoginData((prev) => {
        const newObj = { 
          username: event.target.value,
          password: prev.password
        }
        return prev = newObj;
      }) 
    : 
      setUserLoginData((prev) => {
        const newObj = {
          username: prev.username,
          password: event.target.value
        }
        return prev = newObj;
      })
  }
  const resetInputForm = () => {
    setUserLoginData({username: "", password: ""});
  }
  const onLogin = (event: onClick) => {
    event.preventDefault();
    if (userLoginData.username === "" || userLoginData.password === "") {
      alert("아이디 혹은 비밀번호를 입력해주세요.");
      resetInputForm();
      return;
    }
    const loginState = {
      username: userLoginData.username,
      password: userLoginData.password
    }
    if (false) {
      console.log(`username : ${userLoginData.username}`, `password : ${userLoginData.password}`);
      sessionStorage.setItem("login", JSON.stringify(userLoginData));
      dispatch(userLogin(loginState));
      resetInputForm();
      // window.location.href = "/upload";
    } else {
      alert("아이디 혹은 비밀번호가 틀렸습니다.")
      resetInputForm();
      return;
    }
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
        <span className={styles.Email}>Username</span>
        <input id="username" value={userLoginData.username} className={styles.Enter_your_email_address} placeholder="Enter your username" type="text" onChange={onChangeUserData} />
        <div className={styles.Rectangle_8}></div>
        <span className={styles.Password}>Password</span>
        <input id="password" value={userLoginData.password} className={styles.Enter_your_Password} placeholder="Enter your password" type="password" onChange={onChangeUserData} />
        <div className={styles.Rectangle_9}></div>
        <button type="submit" onClick={onLogin} className={styles.btn_3d_red}>
          <span className={styles.Login}>Sign in</span>
        </button>
      </form>
    </div>
  );
}