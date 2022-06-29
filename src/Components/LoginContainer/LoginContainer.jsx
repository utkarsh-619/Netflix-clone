import { useState } from "react";
import "./LoginContainer.scss";

const LoginContainer = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [isLenrnMore, setIsLearnMore] = useState(false);

  const handelClick = () => {
    console.log("hello");
    setIsShown(!isShown);
  };

  return (
    <div className="loginContainer">
      <h1>Sign In</h1>
  
      <form className="inputSection">
        <input
          type="text"
          placeholder="Email or phone number"
          autoComplete="false"
        />
        <label id="email" className="placeText">
          Email or phone number
        </label>
        <input
          type={isShown ? "text" : "password"}
          placeholder="Password"
          className="placeText"
          autoComplete="false"
        />
        <label id="pass" style={{ top: "85px" }}>
          Password
        </label>

        <div id="show" onClick={handelClick}>
          Show
        </div>
        <button type="submit" id="btn">Sign In</button>
      </form>

      <div className="bellowBTN">
        <div className="rememberMe">
          <input type="checkbox" />
          <label >Remember me</label>
        </div>
        <span>Need help?</span>
      </div>

      <div className="lower-text">
        <span>New to Netflix?</span>
        <div className="signUp" onClick={()=>props.signupFunc(false)}>Sign up now.</div>
      </div>

        
      <div className="learnMore">

        <span className="captcha">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </span>
        {!isLenrnMore && (
          <span className="more" onClick={()=>setIsLearnMore(!isLenrnMore)}>Learn More</span>
        )}

        {isLenrnMore && (
          <div className="moreText">
            The information collected by Google reCAPTCHA is subject to the Google <a href="/">Privacy Policy</a> and <a href="/">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginContainer;
