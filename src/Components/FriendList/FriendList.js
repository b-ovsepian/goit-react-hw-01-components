import "./FriendList.css";
import PropTypes from "prop-types";
import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className="friends">
      <ul className="friend-list">
        {friends.map((item) => {
          const { id, isOnline, name, avatar } = item;
          return (
            <FriendListItem
              key={id}
              isOnline={isOnline}
              name={name}
              avatar={avatar}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
