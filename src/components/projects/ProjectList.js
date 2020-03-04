import React from "react";
import { ProjectCard } from "./card/ProjectCard";

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectCard project={project} key={project.id} />;
        })}
    </div>
  );
};
