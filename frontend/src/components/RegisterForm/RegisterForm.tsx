import React,{useState, ChangeEvent, MouseEvent} from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useTitle } from "../../hooks/useTitle";
import { useDispatch} from "react-redux";
import { addUser } from "../../redux/Register/registerSlice";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Media from 'react-media';
import {onChange, onClick, UserProps}  from "./RegisterType";

export default function RegisterForm() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const dispatch = useDispatch();
  const [userRegisterData, setUserRegisterData] = useState<UserProps>({email: "", password: "", username: ""});
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeUserData = (event: onChange) => {
      if (event.target.id === "email") {
        setUserRegisterData((prev) => {
          const newObj = {
            email: event.target.value,
            password: prev.password,
            username: prev.username
          }
          return prev = newObj;
        });
      } else if (event.target.id === "password") {
        setUserRegisterData((prev) => {
          const newObj = {
            email: prev.email,
            password: event.target.value,
            username: prev.username
          }
          return prev = newObj;
        });
      } else if (event.target.id === "username") {
        setUserRegisterData((prev) => {
          const newObj = {
            email: prev.email,
            password: prev.password,
            username: event.target.value
          }
          return prev = newObj;
        });
      } else return;        
  };
  const onChangeConfirmPassword = (event: onChange) => {
    setConfirmPassword(event.target.value);
  }
  const resetInputForm = () => {
    setUserRegisterData({email: "", password: "", username: ""});
  };
  const onSignup = (event: onClick) => {
    event.preventDefault();
    if (userRegisterData.email === "" || userRegisterData.password === "" || userRegisterData.username === "") {
      alert("Write a Email or Password or Username ");
      resetInputForm();
      return;
    } else if (userRegisterData.password === confirmPassword) {
      const registerState = {
        email: userRegisterData.email,
        password: userRegisterData.password,
        username: userRegisterData.username
      }
      console.log(`email : ${userRegisterData.email}`, `password : ${userRegisterData.password}`, `username : ${userRegisterData.username}`);
      dispatch(addUser(registerState));
      resetInputForm();
    } else {
      alert("check your password")
      resetInputForm();
    }
  };

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Sign up"), 1000);
  
  return(
    <div className={styles.Sign_up_11}>
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
        <span className={styles.Sign_up_header}>Sign Up</span>
        <span className={styles.If_you_have_an_account_register}>If you already have an account</span>
        <span className={styles.You_can_Sign_in_here_}><span className={styles.text_style_1}>You can </span>{<Link to="/">Sign in here!</Link>}</span>
      </div>
      <form className={styles.Group_38}>
        <span className={styles.Email}>Email</span>
        <input id="email" value={userRegisterData.email} className={styles.Enter_your_email_address} placeholder="Enter your email address" type="text" onChange={onChangeUserData} />
        <div className={styles.Rectangle_8}></div>

        <span className={styles.Password}>Password</span>
        <input id="password" value={userRegisterData.password} className={styles.Enter_your_Password} placeholder="Enter your password" type="password" onChange={onChangeUserData} />
        <div className={styles.Rectangle_9}></div>

        <span className={styles.Confirm_password}>Confirm Password</span>
        <input id="confirmpassword" value={confirmPassword} className={styles.Enter_your_Confirm_password} placeholder="Double check" type="password" onChange={onChangeConfirmPassword} />
        <div className={styles.Rectangle_10}></div>

        <span className={styles.Username}>Username</span>
        <input id="username" value={userRegisterData.username} className={styles.Enter_your_username} placeholder="Enter your username" type="text" onChange={onChangeUserData} />
        <div className={styles.Rectangle_11}></div>

        <button type="submit" onClick={onSignup} className={styles.btn_3d_red}>
          <span className={styles.Sign_up}>Sign up</span>
        </button>
      </form>

    </div>
  );
}

