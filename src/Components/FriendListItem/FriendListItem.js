import "./FriendListItem.css";

import React from "react";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className="item">
      <span className={isOnline ? "status green" : "status"}></span>
      <img className="friend-avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
