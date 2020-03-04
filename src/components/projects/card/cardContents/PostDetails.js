import React from "react";

export const PostDetails = ({ cardType }) => {
  return (
    <div
      className={
        cardType === "details" ? "card-action grey lighten-4 grey-text" : ""
      }
    >
      <p className="author-name">Posted By Boomsy</p>
      <p className="date-posted">3rd September, 2am</p>
    </div>
  );
};
