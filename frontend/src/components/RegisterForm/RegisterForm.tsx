import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useTitle } from "../../hooks/useTitle";
import {onChange, onClick, UserRegisterProps}  from "./RegisterType";
import { passwordEngCheck, passwordNumSpcCheck, passwordLengthCheck } from "../../function/passwordCheck";
import { emailValidation } from "../../function/emailValidation";
import axios from "axios";
import HowToSlider from "../HowToSlider/HowToSlider";

export default function RegisterForm() {
  const [userRegisterData, setUserRegisterData] = useState<UserRegisterProps>({email: "", password: "", password2: "", username: ""});
  const [emailExist, setEmailExist] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordDoubleCheck, setPasswordDoubleCheck] = useState(false);

  const onChangeUserData = (event: onChange) => {
      if (event.target.id === "email") {
        setUserRegisterData((prev) => {
          const newUser = { email: event.target.value, password: prev.password, password2: prev.password2, username: prev.username};
          return newUser;
        });
      } else if (event.target.id === "password") {
        setUserRegisterData((prev) => {
          const newUser = { email: prev.email, password: event.target.value, password2: prev.password2, username: prev.username};
          if (!passwordEngCheck(event.target.value) || !passwordLengthCheck(event.target.value) || !passwordNumSpcCheck(event.target.value)) {
            setPasswordValid(true);
            return newUser;
          } else {
            setPasswordValid(false);
            return newUser;
          }
        });
      } else if (event.target.id === "confirmpassword") {
        setUserRegisterData((prev) => {
          const newUser = { email: prev.email, password: prev.password, password2: event.target.value, username: prev.username};
          if (prev.password !== event.target.value) {
            setPasswordDoubleCheck(true);
            return newUser;
          } else {
            setPasswordDoubleCheck(false);
            return newUser;
          }
        });
      } else if (event.target.id === "username") {
        setUserRegisterData((prev) => {
          return {email: prev.email, password: prev.password, password2:  prev.password2, username: event.target.value};
        });
      } else return;        
  };

  const resetInputForm = () => {
    setUserRegisterData({email: "", password: "", password2: "", username: ""});
  };

  const onSignup = (event: onClick) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/v1/register/", userRegisterData)
    .then((res) => {
      resetInputForm();
      window.location.href = "/";
    })
    .catch((err) => {
      setEmailValid(true);
      setPasswordDoubleCheck(true);
      setPasswordValid(true);
      resetInputForm();
    });
  };
  
  const onCheckEmail = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/v1/check-email/", {email: userRegisterData.email})
    .then((res) => { //  이메일 존재하지 않음
      setEmailExist(false);
      if (emailValidation(userRegisterData.email)) {
        setEmailValid(true);  // 합격
        alert("Confirmed")
      } else {
        setEmailValid(false); // 불합격
      }
    })
    .catch((err) => { // 이메일 존재함
      setEmailExist(true);
      setEmailValid(false);
    });
  };

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Sign up"), 1000);
  
  return(
    <div className={styles.Sign_up_11}>
      <div className={styles.aa_1}>
        <HowToSlider />
      </div>
      <div className={styles.Group_34}>
        <span className={styles.Sign_up_header}>Sign Up</span>
        <span className={styles.If_you_have_an_account_register}>If you already have an account</span>
        <span className={styles.You_can_Sign_in_here_}><span className={styles.text_style_1}>You can </span>{<Link to="/">Sign in here!</Link>}</span>
      </div>
      <form className={styles.Group_38}>
        <span className={styles.Email}>Email</span>
        <span className={(emailValid && !emailExist) ? styles.email_validation_display_none : styles.email_validation}></span>
        <button className={styles.btn_email_check} type="button" onClick={onCheckEmail}>check</button>
        <input id="email" value={userRegisterData.email} className={(emailValid) ? styles.Enter_your_email_address : styles.If_email_address_Exist} placeholder="Enter your email address" type="text" onChange={onChangeUserData} />
        <span className={(emailExist) ? styles.email_ballon : styles.email_ballon_display_none}>It already exists</span>
        <span className={(!emailExist && !emailValid ) ? styles.email_ballon : styles.email_ballon_display_none}>Check your email</span>
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

