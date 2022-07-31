import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useTitle } from "../../hooks/useTitle";
import { useDispatch} from "react-redux";
import { addUser } from "../../redux/Register/registerSlice";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Media from 'react-media';
import {onChange, onClick, UserRegisterProps}  from "./RegisterType";
import { useGetUserDataOnce } from "../../hooks/useGetData";
import { passwordEngCheck, passwordNumSpcCheck, passwordLengthCheck } from "../../function/passwordCheck";
import { emailValidation } from "../../function/emailValidation";
import axios from "axios";

export default function RegisterForm() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const dispatch = useDispatch();
  const [userRegisterData, setUserRegisterData] = useState<UserRegisterProps>({email: "", password: "", password2: "", username: ""});
  const [emailExist, setEmailExist] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordDoubleCheck, setPasswordDoubleCheck] = useState(false);
  const getAllUserData = useGetUserDataOnce("http://localhost:8000/api/v1/login/");

  let allUserEmailList: string[] = []
  if (typeof getAllUserData !== "undefined") {
    allUserEmailList = getAllUserData.map((data) => data.email);
  }

  const onChangeUserData = (event: onChange) => {
      if (event.target.id === "email") {
        setUserRegisterData((prev) => {
          const newObj = {
            email: event.target.value,
            password: prev.password,
            password2: prev.password2,
            username: prev.username
          }
          if (allUserEmailList.includes(event.target.value)) {
            setEmailExist(true);
            return prev = newObj;
          } else {
            if (!emailValidation(event.target.value)) {
              setEmailValid(true);
              setEmailExist(false);
              return prev = newObj;
            } else {
              setEmailValid(false);
              setEmailExist(false);
              return prev = newObj;
            }
          }
        });
      } else if (event.target.id === "password") {
        setUserRegisterData((prev) => {
          const newObj = {
            email: prev.email,
            password: event.target.value,
            password2:  prev.password2,
            username: prev.username
          }
          if (!passwordEngCheck(event.target.value) || !passwordLengthCheck(event.target.value) || !passwordNumSpcCheck(event.target.value)) {
            setPasswordValid(true);
            return prev = newObj;
          } else {
            setPasswordValid(false);
            return prev = newObj;
          }
        });
      } else if (event.target.id === "confirmpassword") {
        setUserRegisterData((prev) => {
          const newObj = {
            email: prev.email,
            password: prev.password,
            password2: event.target.value,
            username: prev.username
          }
          if (prev.password !== event.target.value) {
            setPasswordDoubleCheck(true);
            return prev = newObj;
          } else {
            setPasswordDoubleCheck(false);
            return prev = newObj;
          }
        });
      } else if (event.target.id === "username") {
        setUserRegisterData((prev) => {
          const newObj = {
            email: prev.email,
            password: prev.password,
            password2:  prev.password2,
            username: event.target.value
          }
          return prev = newObj;
        });
      } else return;        
  };

  const resetInputForm = () => {
    setUserRegisterData({email: "", password: "", password2: "", username: ""});
  };

  const onSignup = (event: onClick) => {
    event.preventDefault();
    if (userRegisterData.email === "" || userRegisterData.password === "" || userRegisterData.username === "") {
      setEmailValid(true);
      setPasswordDoubleCheck(true);
      setPasswordValid(true);
      resetInputForm();
      return;
    } else if (!emailValid && !passwordValid && !passwordDoubleCheck) {
      console.log(`email : ${userRegisterData.email}`, `password : ${userRegisterData.password}`, `confirmPassword : ${userRegisterData.password2}`, `username : ${userRegisterData.username}`);
      axios.post("http://localhost:8000/api/v1/register/", userRegisterData).then((res) => console.log(res)).catch((err) => console.log(err));
      dispatch(addUser(userRegisterData));
      resetInputForm();
      window.location.href = "/";
    } else {
      setEmailValid(true);
      setPasswordDoubleCheck(true);
      setPasswordValid(true);
      resetInputForm();
      return;
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
        <span className={(emailExist || emailValid) ? styles.email_validation : styles.email_validation_display_none}></span>
        <input id="email" value={userRegisterData.email} className={(emailExist || emailValid) ? styles.If_email_address_Exist : styles.Enter_your_email_address} placeholder="Enter your email address" type="text" onChange={onChangeUserData} />
        <span className={(emailExist) ? styles.email_ballon : styles.email_ballon_display_none}>It already exists</span>
        <span className={(emailValid && !emailExist) ? styles.email_ballon : styles.email_ballon_display_none}>Check your email</span>
        <div className={styles.Rectangle_8}></div>

        <span className={styles.Password}>Password</span>
        <span className={passwordValid ? styles.password_validation : styles.password_validation_display_none}></span>
        <input id="password" value={userRegisterData.password} className={passwordValid ? styles.If_password_invalid : styles.Enter_your_Password} placeholder="Enter your password" type="password" onChange={onChangeUserData} />
        <span className={passwordValid ? styles.password_validation_ballon : styles.password_validation_ballon_display_none}>Password should contain at least<br />one uppercase and special character, 8 ~ 16 length</span>
        <div className={styles.Rectangle_9}></div>

        <span className={styles.Confirm_password}>Confirm Password</span>
        <span className={passwordDoubleCheck ? styles.password_different : styles.password_different_display_none}></span>
        <input id="confirmpassword" value={userRegisterData.password2} className={passwordDoubleCheck ? styles.If_password_different : styles.Enter_your_Confirm_password} placeholder="Double check" type="password" onChange={onChangeUserData} />
        <span className={passwordDoubleCheck ? styles.password_different_ballon : styles.password_different_ballon_display_none}>Check your password</span>
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

