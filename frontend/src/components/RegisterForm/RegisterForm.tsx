import React,{useState, ChangeEvent, MouseEvent} from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useTitle } from "../../hooks/useTitle";
import { useDispatch} from "react-redux";
import { addUser } from "../../redux/Register/registerSlice";

type inputChange = ChangeEvent<HTMLInputElement>;
type inputBtnClick = MouseEvent<HTMLButtonElement>;

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeEmail = (event: inputChange) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: inputChange) => {
    setPassword(event.target.value);
  };
  const onChangeConfirmPassword = (event: inputChange) => {
    setConfirmPassword(event.target.value);
  }
  const onChangeUsername = (event: inputChange) => {
    setUsername(event.target.value);
  }
  const resetInputForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
  }
  const onSignup = (event: inputBtnClick) => {
    event.preventDefault();
    if (email === "" || password === "" || username === "") {
      alert("Write a Email or Password or Username ");
      resetInputForm();
      return;
    } else if (password === confirmPassword) {
      const registerState = {
        email: email,
        password: password,
        username: username
      }
      console.log(`email : ${email}`, `password : ${password}`, `username : ${username}`);
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
      <div className={styles.aa_1}></div>
      <div className={styles.Group_34}>
        <span className={styles.Sign_up_header}>Sign Up</span>
        <span className={styles.If_you_have_an_account_register}>If you have an account register</span>
        <span className={styles.You_can_Sign_in_here_}><span className={styles.text_style_1}>You can </span>{<Link to="/">Sign in !</Link>}</span>
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

        <span className={styles.Confirm_password}>Confirm Password</span>
        <div className={styles.Vector_Confirm_password_icon}></div>
        <input id="confirmpassword" value={confirmPassword} className={styles.Enter_your_Confirm_password} placeholder="Double check" type="password" onChange={onChangeConfirmPassword} />
        <div className={styles.Rectangle_10}></div>

        <span className={styles.Username}>Username</span>
        <div className={styles.Vector_Username_icon}></div>
        <input id="username" value={username} className={styles.Enter_your_username} placeholder="Enter your username" type="text" onChange={onChangeUsername} />
        <div className={styles.Rectangle_11}></div>

        <button type="submit" onClick={onSignup} className={styles.Rectangle_12}>
          <span className={styles.Sign_up}>Sign up</span>
        </button>
      </form>

    </div>
  );
}

