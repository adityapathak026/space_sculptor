import React from "react";

const Button = ({ type, btnText, handleClick }) => {
  return (
    <div className="btn__container">
      <button className="auth btn" type={type} onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
