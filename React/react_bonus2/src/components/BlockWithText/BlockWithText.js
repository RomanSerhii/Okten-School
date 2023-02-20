import React from "react";
import "./BlockWithText.css";

export const BlockWithText = (props) => {
  return (
    <div className="blockWithText">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default BlockWithText;
