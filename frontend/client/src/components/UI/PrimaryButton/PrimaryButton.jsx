import React from "react";
import "./PrimaryButton.css";
function PrimaryButton(props) {
  return (
    <div className="primary-button">
      <button type={props.type} className="primary-btn">{props.children}</button>
    </div>
  );
}

export default PrimaryButton;
