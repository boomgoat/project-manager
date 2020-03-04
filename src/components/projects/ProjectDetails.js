import React from "react";
import { DetailCard } from "./card/DetailCard";

export const ProjectDetails = props => {
  const { projects } = props;
  console.log(projects);
  return (
    <div className="container section project-details">
      <DetailCard cardType={"details"} title={"Project number"} id={"15"} />
    </div>
  );
};
