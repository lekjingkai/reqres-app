import React from "react";
import "../styles/ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div onClick={props.onclick} className="profile-card">
      <div>
        <img src={props.avatar} alt={props.first_name}></img>
      </div>
      <div className="profile-card-desc">
        <p>
          <i className="fa fa-user profile-card-icon" aria-hidden="true"></i>
          {props.first_name} <b>{props.last_name}</b>
        </p>
        <p>
          <i className="fa fa-envelope profile-card-icon" aria-hidden="true"></i>
          {props.email}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
