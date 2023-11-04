import React from "react";
import "../button/button.styles.scss";

const BUTTON_TYPE_CLASES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
