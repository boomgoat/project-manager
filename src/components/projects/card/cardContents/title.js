import React from "react";

export const CardTitle = ({ title, id }) => {
  return (
    <span className="card-title">
      {title} - {id}
    </span>
  );
};
