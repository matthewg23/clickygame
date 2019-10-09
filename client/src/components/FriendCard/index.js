import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">

      <div className="img-container">
        <img clickedonce={props.value} onClick={props.onClick} alt={props.name} src={props.image} />
      </div>

    </div>
  );
}

export default FriendCard;
