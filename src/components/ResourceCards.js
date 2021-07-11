import React from "react";
import "../styles/ResourceCards.css";

const ResourceCards = (props) => {
  return (
    <div onClick={props.onclick} className="resource-card" style={{ backgroundColor: props.color }}>
      <p>
        ID: <b>{props.id}</b>
      </p>
      <p>
        Name: <b>{props.name}</b>
      </p>
      <p>
        Year: <b>{props.year}</b>
      </p>
      <p>
        Color: <b>{props.color}</b>
      </p>
      <p>
        Pantone Value: <b>{props.pantone_value}</b>
      </p>
    </div>
  );
};

export default ResourceCards;
