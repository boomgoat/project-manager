import React from "react";
import { CardTitle } from "./cardContents/title";
import { PostDetails } from "./cardContents/PostDetails";

export const ProjectCard = ({ project, cardType }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <CardTitle title={project.title} id={project.id} />
        <PostDetails cardType={cardType} />
      </div>
    </div>
  );
};
