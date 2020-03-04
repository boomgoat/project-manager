import React from "react";

export const PostDetails = ({ cardType, name, time }) => {
  return (
    <div
      className={
        cardType === "details" ? "card-action  lighten-4 grey-text" : ""
      }
    >
      <p className="author-name">Posted By {name}</p>
      <p className="date-posted">{time}</p>
    </div>
  );
};
