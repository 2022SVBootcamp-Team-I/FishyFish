import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onChangeUsername = (event: any) => {
    setUsername(event.target.value);
  }
  const onSignup = (event: any) => {
    event.preventDefault();
    if (email === "" || password === "" || username === "") {
      alert("Write a Email or Password or Username ");
      setEmail("");
      setPassword("");
      setUsername("");
      return;
    }
    console.log(`email : ${email}`, `password : ${password}`, `username : ${username}`);
    setEmail("");
    setPassword("");
    setUsername("");
  };
  return(
    <div className={styles.Sign_up_11}>
      <div className={styles.aa_1}></div>
      <div className={styles.Group_34}>
        <span className={styles.Sign_up_header}>Sign Up</span>
        <span className={styles.If_you_have_an_account_register}>If you have an account register</span>
        <span className={styles.You_can_Sign_in_here_}><span className={styles.text_style_1}>You can </span>{<Link to="/login">Sign in !</Link>}</span>
      </div>
      <form className={styles.Group_38}>
        <span className={styles.Email}>Email</span>
        <div className={styles.Vector_Email_icon}></div>
        <input id="email" value={email} className={styles.Enter_your_email_address} placeholder="Enter your email address" type="text" onChange={onChangeEmail} />
        <div className={styles.Rectangle_8}></div>

        <span className={styles.Password}>Password</span>
        <div className={styles.Vector_Password_icon}></div>
        <input id="password" value={password} className={styles.Enter_your_Password} placeholder="Enter your password" type="password" onChange={onChangePassword} />
        <div className={styles.Rectangle_9}></div>

        <span className={styles.Username}>Username</span>
        <div className={styles.Vector_Username_icon}></div>
        <input id="username" value={username} className={styles.Enter_your_username} placeholder="Enter your username" type="text" onChange={onChangeUsername} />
        <div className={styles.Rectangle_10}></div>

        <button type="submit" onClick={onSignup} className={styles.Rectangle_11}>
          <span className={styles.Sign_up}>Sign up</span>
        </button>
      </form>

    </div>
  );
}

