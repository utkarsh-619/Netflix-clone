import "./Login.scss";
import LoginContainer from "../../Components/LoginContainer/LoginContainer";
import { Language } from "@material-ui/icons";
import Signup from "../../Components/Signup/Signup";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <div className="login">
      <div className="BGimage">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      
      <div className={isLogIn?"blur":"blur darkBlur"}></div>

      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
      {!isLogIn && (
        <div className="left">
          <div className="selectLang">
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Hindi">हिन्दी</option>
            </select>
            <Language id="icon" />
          </div>
          <button onClick={() => setIsLogIn(true)}>Sign In</button>
        </div>
      )}
      {isLogIn ? <LoginContainer signupFunc={setIsLogIn}/> : <Signup />}

      <Footer />
    </div>
  );
};

export default Login;
