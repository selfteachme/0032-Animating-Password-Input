import React, { useState } from "react";
import { Lock } from "./Lock";
import { Eyeball } from "./Eyeball";

const Password = () => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  console.log(isPasswordShowing);

  const togglePassword = () => {
    setIsPasswordShowing(!isPasswordShowing);
  };

  return (
    <div
      className={`faux-box ${
        isPasswordShowing ? "show-password" : "hide-password"
      }`}
    >
      <Lock />
      {isPasswordShowing ? (
        <input type="text" name="password" className="password" />
      ) : (
        <input type="password" name="password" className="password" />
      )}
      <button onClick={togglePassword} className="toggle">
        <Eyeball />
      </button>
    </div>
  );
};

export { Password };
