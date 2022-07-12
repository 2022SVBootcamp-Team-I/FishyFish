import {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onLogin = (event: any) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Write a Email or Password ");
      setEmail("");
      setPassword("");
      return;
    }
    console.log(`email : ${email}`, `password : ${password}`);
    setEmail("");
    setPassword("");
  };
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
        <input id="password" value={password} className={styles.Enter_your_Password} placeholder="Enter your Password" type="password" onChange={onChangePassword} />
        <div className={styles.Rectangle_9}></div>
        <button type="submit" onClick={onLogin} className={styles.Rectangle_10}>
          <span className={styles.Login}>Login</span>
        </button>
      </form>

    </div>
  );
}

