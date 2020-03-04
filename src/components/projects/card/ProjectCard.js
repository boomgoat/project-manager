import React from "react";
import { CardTitle } from "./cardContents/title";
import { PostDetails } from "./cardContents/PostDetails";

export const ProjectCard = props => {
  console.log("card =>", props.project);
  // const time = props.project.createdAt.toDate();
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <CardTitle title={props.project.title} />
        <PostDetails
          cardType={props.cardType}
          // time={time}
          name={props.project.authorFirstName}
        />
      </div>
    </div>
  );
};
