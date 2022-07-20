
import React,{useState, ChangeEvent, MouseEvent} from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useTitle } from "../../hooks/useTitle";

type onChange = ChangeEvent<HTMLInputElement>;
type onClick = MouseEvent<HTMLButtonElement>;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (event: onChange) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: onChange) => {
    setPassword(event.target.value);
  };
  const resetInputForm = () => {
    setEmail("");
    setPassword("");
  }
  const onLogin = (event: onClick) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Write a Email or Password ");
      resetInputForm();
      return;
    }
    console.log(`email : ${email}`, `password : ${password}`);
    resetInputForm();
    window.location.href = "/upload";
  };

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Sign in"), 1000);
  return(
    <div className={styles.Login_11}>
      
      <div className={styles.aa_1}></div>

      <div className={styles.Group_34}>
        <span className={styles.Sign_in}>Sign in</span>
        <span className={styles.If_you_dont_have_an_account_register}>If you don’t have an account register</span>
        <span className={styles.You_can_Register_here_}><span className={styles.text_style_1}>You can </span>{<Link to="/register">Register here !</Link>}</span>
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
        <button type="submit" onClick={onLogin} className={styles.Rectangle_10}>
          <span className={styles.Login}>Sign in</span>
        </button>
      </form>

    </div>
  );
}

