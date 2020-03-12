import React from "react";
import moment from "moment";

export const DetailCard = props => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="section card-content grey-text text-darken-3">
        <span className="card-title">{props.title}</span>
        <p>{props.content}</p>
      </div>
      <div className="card-action lighten-4 grey-text">
        <p className="author-name">Posted By {props.name}</p>
        <p className="date-posted">{moment(props.date.toDate()).calendar()}</p>
      </div>
    </div>
  );
};
