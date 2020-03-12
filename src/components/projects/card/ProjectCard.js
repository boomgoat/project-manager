import React from "react";
import moment from "moment";

export const ProjectCard = props => {
  // const time = props.project.createdAt.toDate();
  const { project } = props;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p className="author-name">
          Posted By {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="date-posted">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};
