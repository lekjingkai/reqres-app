import React from "react";
import "../styles/MainCard.css";
import { Link } from "react-router-dom";

const MainCard = (props) => {
  return (
    <div className="main-card">
      <Link to={props.link}>
        <button className="link-btn">{props.title}</button>
      </Link>
      {props.children}
    </div>
  );
};

export default MainCard;
