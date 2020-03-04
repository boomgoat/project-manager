import React from "react";
import { ProjectCard } from "./card/ProjectCard";
import { Link } from "react-router-dom";

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={`/project/${project.id}`}>
              <ProjectCard project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};
