import React from "react";
import "../styles/MethodCard.css";

const MethodCard = (props) => {
  return (
    <div className="method-card">
      <span className="method">{props.method}</span>
      <span className="description">{props.description}</span>
    </div>
  );
};

export default MethodCard;
