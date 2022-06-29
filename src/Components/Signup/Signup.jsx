import { useState } from "react";
import "./Signup.scss";

const Signup = () => {
  const [isEmail, setIsEmail] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const passChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signup">
      <div className="wraper">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>

      {isEmail ? (
        <div className="signupInput">
          <input type="text" onChange={emailChange} value={email} placeholder="Email Address"/>
          {/* <label>Email Address</label> */}
          <button onClick={() => {if(email) return setIsEmail(false);}}>Get Started &gt;</button>
        </div>
      ) : (
        <form className="signupInput">
          <input
            type="password"
            onChange={passChange}
            value={password}
            autoComplete="false"
            placeholder="Enter your Password"
          />
          {/* <label>Enter your Password</label> */}
          <button>Start</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
